import express, { Application } from "express"
import dotenv from "dotenv"
dotenv.config()

const main = async(): Promise<void> => {

    const PORT = process.env.PORT
    const app: Application = express()

    app.use(express.json())
    try {
        
    } catch (error) {
        console.log(error);
    }finally{
        app.listen(PORT, ():void => {
            console.log(`App started ${PORT}`);
        })
    }
}

main()