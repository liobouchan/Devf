import{
    GraphQLList
} from 'graphql'

import tipo_Restaurante from '../../../models/tipo_Restaurante'
import {type_RestaurantType} from '../../types/tipo_Restaurante'

const queryAlltipo_Restaurantes = {
    type: GraphQLList(type_RestaurantType),
    resolve(){
        const tipos = tipo_Restaurante.find().exec();
        if(!tipos) throw new Error('No se pudieron obtener todos los tipos de restaurantes')
        return tipos;
    }
}

export default queryAlltipo_Restaurantes