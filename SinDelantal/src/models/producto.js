import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ProductoSchema = new Schema({
  "nombre":{
    type: String,
    required: true
  },
  "precio":{
    type: String,
    required: true
  },
  "foto":{
    type: String,
    default: "https://i.kinja-img.com/gawker-media/image/upload/s--yQNssSv---/c_scale,f_auto,fl_progressive,q_80,w_800/hrp50xxvosnilpawgsjr.jpg"
  },
  "descripcion":{
    type: String,
    required: true
  },
  "tipo":{
    type: String,
    required: true
  },
  "tienda":{
     type: Schema.Types.ObjectId,
     ref: 'Tienda' 
  }
},{ collection: 'Producto', timestamps: true });

export default mongoose.model('Producto', ProductoSchema);
