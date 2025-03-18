import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { article, project } from "./types";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "data",
      source: "projects/**.json",
      schema: project,
    }),
    articles: defineCollection({
      type: "page",
      source: "articles/**.md",
      schema: article,
    }),
  },
});
