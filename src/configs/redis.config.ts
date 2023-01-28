import { createClient } from "redis"
import { ErrorHandler } from "../exception/errorHandler"

const redis = async(): Promise<void> => {
    const client = createClient()
    try {
        client.on('error', err => console.log(err))
        await client.connect()
    } catch (error) {
       throw new ErrorHandler('Error in redis', 422)        
    }
}