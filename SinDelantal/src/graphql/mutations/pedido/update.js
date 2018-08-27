import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Pedido from '../../../models/pedido'
import { PedidosType, PedidosInputType } from '../../types/pedido';

export default {
    type: PedidosType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(PedidosInputType)
        }
    },
    resolve(root, params){
        return Pedido.findByIdAndUpdate(params.id, {$set:{...params.data}}, {new:true})
            .then(pedido => pedido)
            .catch(err => Error('Error al hacer el update del pedido'))
    }
}