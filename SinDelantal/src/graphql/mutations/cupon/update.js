import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Cupon from '../../../models/cupon'
import { CuponType, CuponInputType } from '../../types/cupon'

export default{
    type: CuponType,
    args:{
        id:{
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(CuponInputType)
        }
    },
    resolve(root, params){
        return Cupon.findByIdAndUpdate(params.id, {$set:{...params.data}}, {new:true})
        .then(cupon => cupon)
        .catch(err => Error('Error al Hacer el update del cupon'))
    }
}