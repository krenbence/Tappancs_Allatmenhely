import {Router} from "express";
import { getDefault } from "../controller/defaultRoot.ts";

const router : Router = Router();

router.get('/',getDefault);

export default router;