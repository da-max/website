# SEE : https://bun.sh/guides/ecosystem/docker
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS install

RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/

RUN apt-get update && apt-get install -y python3-dev make gcc g++

RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease

COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/.output .output
COPY --from=prerelease /usr/src/app/.nuxt .nuxt
COPY --from=prerelease /usr/src/app/package.json .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]
