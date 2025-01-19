import z from "zod";

export const project = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
  contribution: z.string(),
  thumbnail: z.string().optional(),
  status: z.enum(["LIVE", "WIP"]),
  slug: z.string(),
  opensource: z.boolean(),
  images: z.string().array().optional(),
});

export type Project = z.infer<typeof project>;

export const article = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  published: z.date(),
});

export type Article = z.infer<typeof article>;
