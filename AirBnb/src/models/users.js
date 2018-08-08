import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema
const SALT = 10;
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
    type: String
  }
},{ collection: "Users", timestamps: true });

UserSchema.pre('save',(next)=>{
  let user = this;

  if (!user.isModified('password')) { return next(); }

  bcrypt.genSalt(SALT , (err,salt)=>{
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash)=>{
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

export default mongoose.model('Users', UserSchema);
