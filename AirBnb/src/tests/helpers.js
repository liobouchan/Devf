import mongoose from 'mongoose'
import { rejects } from 'assert';

process.env.NODE_ENV = 'test'

const config = {
    db:{
        test:'mongodb://<dbuser>:<dbpassword>@ds221292.mlab.com:21292/prueba'
    },
    connection:null
}

function connect(){
    return new Promise((resolve,reject) => {
       const options = {
           server: {
               auto_reconnect: true,
               reconnectTries: Number.MAX_VALUE,
               reconnectInternal:1000
           }
       };
       mongoose.connect(config.db.test,options);

       config.connection = mongoose.connection;

       config.connection
            .once('open', resolve)
            .on('error' , (e) => {
                console.log(e)
                reject()
            })
    });

}