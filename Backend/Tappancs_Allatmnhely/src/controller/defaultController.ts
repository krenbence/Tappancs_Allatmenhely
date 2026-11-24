import type { Request,Response } from "express";

export const getDefault = (_req:Request,res:Response) => {
    return res.send("A Tappancs állatmenhely szervere fut!");
};