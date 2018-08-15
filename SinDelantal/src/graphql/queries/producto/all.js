import{
    GraphQLList
} from 'graphql'

import Producto from '../../../models/producto'
import {ProductType} from '../../types/producto'

const queryAllProductos = {
    type: GraphQLList(ProductType),
    resolve(){
        const producto = Producto.find.exec()
        if(!producto) throw new Error('No se pueden obtener todos los productos')
        return producto;
    }
}

export default queryAllProductos;