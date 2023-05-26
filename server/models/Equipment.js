const { Schema, model } = require('mongoose');

const equipSchema = new Schema({
    equipName: {
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    techLvl:{
        type: Number,
        required: true
    },
    range:{
        type:Number,
    },
    magazineCap:{
        type: Number
    },
    dmgDice:{
        type: String
    },
    dmgType:{
        type: String
    },
    reloadTime:{
        type:String
    },
    bulk:{
        type:Number,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    specialNotes:{
        type:String
    }


})

const Equipment = model('Equipment', equipSchema);
module.exports= Equipment