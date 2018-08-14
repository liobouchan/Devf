import{
    GraphQLList
} from 'graphql'

import Pedidos from '../../../models/pedido'
import {PedidosType} from '../../types/pedido'

const queryAllPedidos = {
    type: new GraphQLList(PedidosType),
    resolve(){
        const pedido = Pedidos.find().exec();
        return pedido
    }
}

export default queryAllPedidos;