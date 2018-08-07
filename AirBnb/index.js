import express from 'express'
import parser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || "mongodb://admin123:admin123@ds215172.mlab.com:15172/bgsg"

mongoose.connect(mongoURI,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', ()=> console.log('Error en conectar a la base de Datos'))
  .once('open', ()=> console.log('Conectado a la BD'))
  
app.use(parser.json());
app.use(cors());

app.get('/', (req , res)=>{
  res.send('Server on');
});

app.listen(3000, () => console.log('Server on 3000'));
