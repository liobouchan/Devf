import {
    GraphQLNonNull
} from 'graphql'

import Tienda from '../../../models/tienda'
import {StoreInputType, StoreType} from '../../types/tienda'

export default {
    type:StoreType,
    args:{
        data:{
            type: new GraphQLNonNull(StoreInputType)
        }
    },
    resolve(root,params){
        const tienda = new Tienda(params.data);
        const newTienda = tienda.save()
        if (!newTienda) throw Error("Error al crear la tienda en la base de datos :(");
        return newTienda
    }
}