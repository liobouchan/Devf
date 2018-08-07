import express from 'express'
import parser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || "mongodb://admin123:admin123@ds133311.mlab.com:33311/bringeit"

mongoose.db = connect(mongoURI,{useNewUrlParser: true} );
const db = mongoose.connection;
db.on('error', ()=> console.log('Eror en conectar a la base de datos'))
  .once('open', ()=> console.log("Conectado a la Base De Datos"))

app.use(parser.json());
app.use(cors());

app.get('/', (req , res)=>{
  res.send('Server on');
});

app.listen(3000, () => console.log('Server on 3000'));
