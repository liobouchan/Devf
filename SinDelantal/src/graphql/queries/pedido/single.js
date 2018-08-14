import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Pedido from '../../../models/pedido'
import { PedidosType } from '../../types/pedido';

const querySinglePedido = {
    type: PedidosType,
    args: {
        id:{
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const pedido = Pedido.findById(params.id).exec()
        return pedido
    }
}

export default querySinglePedido;