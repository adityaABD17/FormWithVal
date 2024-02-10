import express from "express";
import mongoose from "mongoose";
import router from "./routes";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());
app.use('/',router)


const MONGO_URL = "mongodb://localhost:27017"
mongoose.connect(MONGO_URL,{
    dbName: "Forms-app",
}).then(()=>{
    console.log("DataBase connected...");
}).catch((err) => console.log(err));


app.listen(4000,()=>{
    console.log(`Server running on http://localhost:4000`);
})

