import mongoose from 'mongoose'

import bcrypt from 'bcrypt'

const SALT = 10;

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

  "fecha_nacimiento":{

    type: Date,

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

  "genero":{

    type: String,

    required: true

  },

  "username":{

    type: String,

    required: true

  },

  "foto":{

    type: String,

    default: "https://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_660/02th-egg-person"

  },

  "password":{

    type: String,

    required : true

  },

  "direcciones":[{

    type: String,

    required: true

  }],

  "card": [{

    "card_number": Number,

    "expiration": String,

    "code": Number

  }]

}, { collection: 'User', timestamps: true });



UserSchema.pre('save',function(next){

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

export default mongoose.model('User', UserSchema);
