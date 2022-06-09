const {Schema,model} = require("mongoose")

const AttemptSchema = new Schema({
    taker:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    answers:[String],
    date:Date
})

module.exports = {AttemptSchema}