import z from 'zod'

const originSchema = z.object({
    name: z.string(),
    url: z.string(),
})
const locationSchema = z.object({
    name: z.string(),
    url: z.string(),
})

export const characterCoreSchema = z.object({
    id: z.number(),
    name: z.string(),
    status: z.string(),
    species: z.string(),
    type: z.string(),
    gender: z.string(),
    origin: originSchema,
    location: locationSchema,
    image: z.string(),
    episode: z.array(z.string()),
    url: z.string(),
    created: z.string(),
})


export type CharacterSchema = z.infer<typeof characterCoreSchema>
