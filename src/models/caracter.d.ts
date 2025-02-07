type Origin = {
    name: string,
    url: string,
}
type Location = {
    name: string,
    url: string,
}
type Info = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
}


type Character = {
    id: number,
    name: string,
    status: "Alive" | "Dead" | "unknown",
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Location,
    image: string,
    episode: string[],
    url: string,
    created: string,

}
export type CharacterResponse = {
    info: Info,
    results: Character[],
}
export interface SearchResult<T> {
    data: T | null;
    error: string | null;
    status: number;
}