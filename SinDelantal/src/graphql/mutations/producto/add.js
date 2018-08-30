import {
    GraphQLNonNull
} from 'graphql'

import Producto from '../../../models/producto'
import {ProductType, ProductInputType} from '../../types/producto'

export default {
    type: ProductType,
    args:{
        data:{
            type: new GraphQLNonNull(ProductInputType)
        }
    },
    resolve(root,params){
        const product = new Producto(params.data);
        const newProduct = product.save()
        if(!newProduct) throw Error('Error al crear el nuevo producto')
        return newProduct
    }
}
