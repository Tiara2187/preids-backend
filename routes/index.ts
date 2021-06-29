import { Router, Request, Response } from "express";
import errorHandler from "../helpers/errorHandlers";
import visitorsRoutes from './visitors'


class Index {
    router:Router
    constructor(){
        this.router = Router()
        this.index()

    }
    public index():void{
        this.router.use('/visitors', visitorsRoutes)
        this.router.use(errorHandler.errorhandler)
       
    }
}

export default new Index().router

