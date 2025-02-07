import z from 'zod'

// {
//     "id": 2,
//     "name": "Morty Smith",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth",
//       "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//       "name": "Earth",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
//       // ...
//     ],
//     "url": "https://rickandmortyapi.com/api/character/2",
//     "created": "2017-11-04T18:50:21.651Z"
//   }

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
