import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser  from 'body-parser'
import userRoutes from "./routers/userRoutes.js";
import noticiasRoutes from "./routers/noticiasRoutes.js";
import faqRoutes from "./routers/FaqRoutes.js";
import mongoose from "mongoose";
const app = express();


if(process.env.NODE_ENV === 'production'){
    const port = process.env.PORT || 5001;
    app.set("port", port)
    }else{
    app.set('port', 5001)
}

app.use(cors());
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/users', userRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/faq', faqRoutes);

export default app;
