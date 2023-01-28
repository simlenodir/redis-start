import { DataSource } from "typeorm";
import path from "path";

const dataSource = new DataSource({
    type: 'postgres',
    host: 'john.db.elephantsql.com',
    port: 5432,
    username: 'njgfltgl',
    password:'O8J1SVJv3JthmTZHF_oTDEllbxTPoYRG',
    database: 'njgfltgl',
    entities: [path.resolve(__dirname, '..', '*.entity.{ts,js}')],
    migrations: [path.resolve(__dirname, '..', 'migrations', '*/**.{ts,js}')],
    logging: true,
    synchronize: false
})

export default dataSource