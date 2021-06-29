import { NextFunction, Request, Response } from "express";
import { Visitors } from "../models/visitors";

class VisitorsController {
    static async createVisitors(req: Request, res: Response, next: NextFunction){
        const { name, address, age, indikator, email, phone, birthdate, doctors} = req.body
        const visitorsData = await Visitors.findOne({
            name: name,
            address: address,
            age: age,
            indikator: indikator,
            email: email,
            phone:phone,
            birthdate: birthdate,
            doctors: doctors

        })
        console.log(visitorsData);
        if(visitorsData) { next({name: 'VISITORSEXIST'}) }
        else{
            const visitors = new Visitors({
                name,
                address,
                age,
                indikator,
                email,
                phone,
                birthdate,
                doctors

            });
            visitors.save()
            .then(data => {
                res.status(200).json({success : true, data})
            })
            .catch(err => {next({name : 'VALID'})})
        }  
    }

    static async getVisitors(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        try{
            const visitors = await Visitors.findById(id)
            res.status(200).json({success : true, data : visitors})
        }
        catch (any) { next({name: 'NOT_FOUND'})}
    }

    static async listVisitors(req: Request, res: Response, next: NextFunction)
    {
        try{
            const visitors = await Visitors.find()
            res.status(200).json({success : true, data : visitors})
        }
        catch (any) { next({name: 'NOT_FOUND'})}
    }

    static async deleteCategory(req: Request,res: Response,next: NextFunction){
        const {id} = req.params
        try{
            const visitors = await Visitors.findByIdAndDelete(id)
            res.status(200).json({success : true, message : 'delete success'})
        }
        catch(e) { next({name: 'PRODUCTNOTFOUND'}) } 
    }

    static async updateVisitors(req: Request,res: Response,next: NextFunction){
        const {id} = req.params
        const {name, address, age, indikator, email, phone, birthdate, doctors} = req.body
        try{
            const newData = {name, address, age, indikator, email, phone, birthdate, doctors}
            for(let key in newData) if(!newData[key]) delete newData[key]
            const visitors = await Visitors.findByIdAndUpdate(id,newData,{new: true})
            res.status(200).json({success : true, data : visitors})
        }
        catch (e) { next({name: 'PRODUCTNOTFOUND'}) }
    }


}

export default VisitorsController