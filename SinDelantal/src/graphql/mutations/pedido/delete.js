import{
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Pedido from '../../../models/pedido'
import {PedidosType} from '../../types/pedido'

export default {
    type: PedidosType,
    args: {
        id:{
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params){
        const deletePedido = Pedido.findByIdAndRemove(params.id).exec()
        if(!deletePedido) throw Error('Error al borrar el pedido')
        return deletePedido
    }
}