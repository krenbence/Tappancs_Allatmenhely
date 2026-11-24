import express from "express";
import cors from "cors";
//routers
import router from "../routes/route.ts";
import allatRouter from "../controller/AllatHandler/allatRoutes.ts";
import felhasznaloRouter from "../controller/FelhasznaloHandler/felhasznaloRoutes.ts";
import oltasRouter from "../controller/OltasHandler/oltasRoutes.ts";
import kerelemRouter from "../controller/KerelemHandler/kerelemRoutes.ts";
import vedelemRouter from "../controller/VedelemHandler/vedelemRoutes.ts";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin:"*"
}));//kesebb security miatt csinalok tokent

app.use(router);
app.use(allatRouter);
app.use(felhasznaloRouter);
app.use(oltasRouter);
app.use(kerelemRouter);
app.use(vedelemRouter);

export default app;