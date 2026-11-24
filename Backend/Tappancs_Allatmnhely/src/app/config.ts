import dotenv from "dotenv";

dotenv.config();

class Config{
    constructor(){
        return{
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.NAME
        }
    }
}

const config : Config = new Config();

export default config;