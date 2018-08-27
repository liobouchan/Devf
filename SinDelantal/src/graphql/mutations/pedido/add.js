import {
    GraphQLNonNull
} from 'graphql'

import Pedido from '../../../models/pedido'
import {PedidosType,PedidosInputType} from '../../types/pedido'

export default {
    type:PedidosType,
    args:{
        data:{
            type: new GraphQLNonNull(PedidosInputType)
        }
    },
    resolve(root,params){
        const pedido = new Pedido(params.data);
        const newPedido = pedido.save()
        if (!newPedido) throw Error("Error al crear la pedido en la base de datos :(");
        return newPedido
    }
}