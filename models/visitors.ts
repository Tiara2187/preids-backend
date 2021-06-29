import mongoose from 'mongoose'

interface IVisitors extends mongoose.Document
{
    name : string,
    address : string,
    age: number,
    indikator: string,
    email: string,
    phone: string,
    birthdate: Date,
    doctors: string,
}

interface IVisitorsDoc extends mongoose.Document
{
    name : string,
    address : string,
    age: number,
    indikator: string,
    email: string,
    phone: string,
    birthdate: Date,
    doctors: string,

}

interface MVisitors extends mongoose.Model<IVisitors>{
    build(attr:IVisitors):IVisitorsDoc
}

const visitorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    indikator: {
        type: String,
        required: true
    },
    phone : {
        type : String,
        unique:true,
        required: true,
        maxlength: 20,
        validate : [/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/, 'please fill valid phone']
    },
    email: {
        type: String,
        required: true,
        unique:true, partialFilterExpression: {email: {$exists:true }},
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    birthdate : {
        type : Date,
       required: true

    },
    doctors : {
        type : String,
        required: true

    }
},
{
    timestamps: true
})

const Visitors = mongoose.model<IVisitorsDoc, MVisitors>('Visitors', visitorsSchema);

export {Visitors}

