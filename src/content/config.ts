import { defineCollection, z } from "astro:content";

const experience = defineCollection({
    type: "data",
    schema: z.object({
        idx: z.number(),
        company: z.string(),
        role: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        bullets: z.array(z.string()),
    }),
});

const projects = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string(),
        techStack: z.array(z.string()),
        link: z.string().optional(),
    }),
});

export const collections = {
    experience,
    projects,
};
