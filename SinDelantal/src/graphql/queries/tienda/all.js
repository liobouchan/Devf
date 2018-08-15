import{
    GraphQLList
} from 'graphql'

import Tienda from '../../../models/tienda'
import {StoreType} from '../../types/tienda'

const queryAllTiendas = {
    type: GraphQLList(StoreType),
    resolve(){
        const tienda = Tienda.find().exec()
        if(!tienda) throw new Error('No se pudieron obtener todas las tiendas disponibles')
        return tienda;
    }
}

export default queryAllTiendas;