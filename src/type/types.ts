namespace Express{
    export interface Request{
        filtered: {
            id?: string,
            first_name?: string,
            last_name?: string,
            age?: number
        }
    }
}