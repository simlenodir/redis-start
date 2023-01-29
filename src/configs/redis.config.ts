import { createClient } from "redis"
import { ErrorHandler } from "../exception/errorHandler"

const redisClient = async(): Promise<unknown> => {
    const client = createClient()
    try {
        client.on('error', err => console.log(err))
        await client.connect()
        return client
    } catch (error) {
       throw new ErrorHandler('Error in redis', 422)        
    }
}