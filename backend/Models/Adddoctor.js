const {Schema,model} = require('../connection')
const AddDocSchema = new Schema({
    fname:String,
    email:String,
    specialization:String,
    description:String,
    qualification:String,

})
module.exports = model('doctors',AddDocSchema)