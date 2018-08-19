import {GraphQLNonNull, GraphQLID} from 'graphql'

import Tienda from '../../../models/tienda'
import {StoreType} from '../../types/tienda'

const querySingleTienda = {
    type: StoreType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params){
        const tienda = Tienda.findById(params.id).exec();
        return tienda;
    }
}

export default querySingleTienda;
