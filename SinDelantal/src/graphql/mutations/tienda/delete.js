import{
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Tienda from '../../../models/tienda'
import {StoreType} from '../../types/tienda'

export default {
    type: StoreType,
    args: {
        id:{
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params){
        const deleteTienda = Tienda.findByIdAndRemove(params.id).exec()
        if(!deleteTienda) throw Error('Error al borrar la Tienda')
        return deleteTienda
    }
}