import mongoose from 'mongoose'

const Schema = mongoose.Schema
const PedidoSchema = new Schema({
  "status_pedido":{
    type: Boolean,
    required: true
  },
  "status_pago":{
    type: Boolean,
    required: true
  },
  "direccion":{
    type: String,
    required: true
  },
  "cupon":{
     type: Schema.Types.ObjectId,
     ref: 'Cupon'
  },
  "user":{
     type: Schema.Types.ObjectId,
     ref: 'User'
  },
  "tienda":{
     type: Schema.Types.ObjectId,
     ref: 'Tienda'
  },
  "monto":{
    type: String,
    required: true
  },
  "Productos":[{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }]



},{ collection: 'Pedido', timestamps: true });

export default mongoose.model('Pedido', PedidoSchema);
