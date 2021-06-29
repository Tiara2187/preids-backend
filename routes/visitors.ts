import { Router, Request, Response } from "express";
import VisitorsController from "../controllers/VisitorsController";

class Visitors {
    router:Router
    constructor(){
        this.router = Router()
        this.visitors()
    }
    public visitors():void{
        this.router.post('/createvisitors', VisitorsController.createVisitors)
        this.router.get('/getvisitors/:id', VisitorsController.getVisitors)
        this.router.get('/listvistors', VisitorsController.listVisitors)
        this.router.delete('/deletevisitors/:id', VisitorsController.deleteCategory)
        this.router.put('/updatevisitors/:id', VisitorsController.updateVisitors)

    }
}

export default new Visitors().router