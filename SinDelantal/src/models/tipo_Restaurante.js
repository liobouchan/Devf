import mongoose from 'mongoose'

const Schema = mongoose.Schema
const tipo_RestauranteSchema = new Schema({
  "nombre":{
    type: String,
    required: true
  },
  "descripcion":{
    type: String,
    required: true
  }
},{ collection: "tipo_Restaurante", timestamps: true });

export default mongoose.model('tipo_Restaurante', tipo_RestauranteSchema);
