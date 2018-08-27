import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Producto from '../../../models/producto'
import { ProductInputType , ProductType } from '../../types/producto'

export default {
    type: ProductType,
    args:{
        id:{
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteProducto = Producto.findByIdAndRemove(params.id).exec()
        if(!deleteProducto) throw Error('Error al borrar un producto')
        return deleteProducto
    }
}