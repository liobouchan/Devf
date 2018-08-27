import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Producto from '../../../models/producto'
import { ProductType , ProductInputType } from '../../types/producto'

export default {
    type: ProductType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(ProductInputType)
        }
    },
    resolve(root,params){
        return Producto.findByIdAndUpdate(params.id,{$set:{...params.data}}, {new:true})
            .then(producto => producto)
            .catch(err => Error('Error al hacer un update del producto'))
    }
}