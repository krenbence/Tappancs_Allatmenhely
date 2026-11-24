import app from "./app.ts";
import dotenv from "dotenv";

dotenv.config();

const Port = process.env.PORT;

app.listen(Port,()=>{
    console.log("A szerver fut!");
})