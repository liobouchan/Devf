import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Producto from '../../../models/user'
import { ProductType } from '../../types/producto';

const querySingleProduct = {
    type: ProductType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const producto = Producto.findById(params.id).exec()
        return producto
    }
}

export default querySingleProduct;