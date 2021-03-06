import mongoose from 'mongoose'

const Schema = mongoose.Schema
const TiendaSchema = new Schema({
  "nombre":{
    type: String,
    required: true
  },
  "direccion":{
    type: String,
    required: true
  },
  "correo":{
    type: String,
    required: true
  },
  "telefono":{
    type: Number,
    required: true
  },
  "tipo_Restaurante":{
     type: Schema.Types.ObjectId,
     ref: 'tipo_Restaurante'
  },
  "calificacion":{
    type: String,
    required: true
  },
  "horario":{
    type: String,
    required: true
  },
  "descripcion":{
    type: String,
    required: true
  },
  "foto":{
    type: String,
    default: "https://www.google.com.mx/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiU_ezl9dncAhUjheAKHTwjALgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tripadvisor.co.za%2FRestaurant_Review-g294217-d939504-Reviews-Amber_at_The_Landmark_Mandarin_Oriental-Hong_Kong.html&psig=AOvVaw2wpIsEzHvAhEIRvFYO6Y6q&ust=1533696218763484"
  },
  "costo":{
    type: String,
    required: true
  },
  "Productos":[{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }]



},{ collection: 'Tienda', timestamps: true });

export default mongoose.model('Tienda', TiendaSchema);
