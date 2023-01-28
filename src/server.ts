import express, { Application } from "express"
import dotenv from "dotenv"
import dataSource from "./configs/orm.config"
dotenv.config()

const main = async(): Promise<void> => {

    const PORT = process.env.PORT
    const app: Application = express()

    app.use(express.json())
    try {
        dataSource.initialize().then((): void => console.log('Connected'))
    } catch (error) {
        console.log(error);
    }finally{
        app.listen(PORT, ():void => {
            console.log(`App started ${PORT}`);
        })
    }
}

main()