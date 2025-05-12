# SEE : https://bun.sh/guides/ecosystem/docker
FROM node:24 AS base
WORKDIR /usr/src/app

RUN corepack enable pnpm

FROM base AS install

RUN mkdir -p /temp/dev
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml /temp/dev/

RUN apt-get update && apt-get install -y python3-dev make gcc g++

RUN cd /temp/dev && pnpm install

RUN mkdir -p /temp/prod
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml /temp/prod/
RUN cd /temp/prod && pnpm install

FROM base AS prerelease

COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN pnpm build

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/.output .output
COPY --from=prerelease /usr/src/app/.nuxt .nuxt
COPY --from=prerelease /usr/src/app/package.json .

# run the app
EXPOSE 3000/tcp
ENTRYPOINT [ "node", ".output/server/index.mjs" ]
