import mongoose from 'mongoose'

const Schema = mongoose.Schema
const CuponSchema = new Schema({
  "cupon":{
    type: String,
    required: true
  },
  "descuento":{
    type: String,
    required: true
  },
  "descripcion":{
    type: String,
    required: true
  }
},{ collection: "Cupon", timestamps: true });

export default mongoose.model('Cupon', CuponSchema);
