import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Tipo from '../../../models/tipo_Restaurante'
import { type_RestaurantType } from '../../types/tipo_Restaurante'

export default {
    type: type_RestaurantType,
    args:{
        id:{
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteTipo = Tipo.findByIdAndRemove(params.id).exec()
        if(!deleteTipo) throw Error('Error al borrar un Tipo de restaurante')
        return deleteTipo
    }
}