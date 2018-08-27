import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Cupon from '../../../models/cupon'
import { CuponType } from '../../types/cupon'

export default {
    type: CuponType,
    args: {
        id:{
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteCupon = Cupon.findByIdAndRemove(params.id).exec()
        if(!deleteCupon) throw Error('Error al borrar el cupon')
        return deleteCupon
    }
}