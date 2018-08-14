import express from 'express'
import parser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import graphQLHTTP from 'express-graphql'

import schema from './src/graphql'
import User from './src/models/user'

const app = express();
const PORT = process.env.PORT || 8000
const mongoURI = process.env.MONGODB_URI || "mongodb://admin123:admin123@ds133311.mlab.com:33311/bringeit"

mongoose.connect(mongoURI,{useNewUrlParser: true} );
const db = mongoose.connection;
db.on('error', ()=> console.log('Eror en conectar a la base de datos'))
  .once('open', ()=> console.log("Conectado a la Base De Datos"))

app.use(parser.json());
app.use(cors());

app.get('/', (req , res)=>{
  res.send('Sin Delantal on');
});

app.post('/user/create', (req, res) =>{
  let user = req.body

  console.log(user)
  User.create(user)
    .then((user) => {
      console.log(user._id)
      return res.status(201).json({
        message: 'Usuario Creado',
        id: user._id
      })
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err)
    })
});

app.use('/graphql' , graphQLHTTP((req,res) => ({
  schema,
  graphiql: true,
  pretty: true
})));

app.listen(PORT, () => console.log('Server on ' + PORT));
