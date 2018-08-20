import {
    GraphQLNonNull
} from 'graphql'

import Cupon from '../../../models/cupon'
import {CuponType, CuponInputType} from '../../types/cupon'
 export default {
    type: CuponType,
    args: {
        data: {
            type: new GraphQLNonNull(CuponInputType)
        }
    },
    resolve(root, params){
        const cupon = new Cupon(params.data);
        const newCupon = cupon.save();
        if (!newCupon) throw Error("Error al crear el Cupon")
        return newCupon
    }
} 