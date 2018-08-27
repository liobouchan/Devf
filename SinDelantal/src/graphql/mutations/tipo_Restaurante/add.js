import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Tipo from '../../../models/tipo_Restaurante'
import { type_RestaurantType , type_RestaurantInputType } from '../../types/tipo_Restaurante'

export default {
    type: type_RestaurantType,
    args:{
        data: {
            type: new GraphQLNonNull(type_RestaurantInputType)
        }
    },
    resolve(root, params){
        const tipo = new Tipo(params.data);
        const newTipo = tipo.save()
        if (!newTipo) throw Error('Error al crear nuevo Tipo de Restaurante')
        return newTipo
    }
}