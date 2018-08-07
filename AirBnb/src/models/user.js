import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  "nombre":{
    type: String,
    required: true
  },
  "apellidos":{
    type: String,
    required: true
  },
  "correo":{
    type: String,
    required: true
  },
  "fecha_nacimiento":{
    type: Date
  },
  "password":{
    type: String,
    required : true
  },
  "username":{
    type: String,
    required : true,
    unique: true
  },
  "foto":{
    type: String,
    default: "https://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_660/02th-egg-person"
  },
  "genero":{
    type: String,
    required: true
  },
  "pais":{
    type: String
  },
  "ubicacion":{
    type: String,
    required: true
  },
  "rol":{
    type: String,
    required: true
  },
  "user_pay":{
    type: String,
    required: true
  }
},{ collection: "Users", timestamps: true });
