import express from 'express'
import parser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();

app.get('/', (req , res)=>{
  res.send('Server on');
});

app.listen(3000, () => console.log('Server on 3000'));
