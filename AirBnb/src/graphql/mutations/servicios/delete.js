import{
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Servicio from '../../../models/servicios'
import { ServiciosType } from '../../types/servicios';

export default {
    type: ServiciosType,
    args:{
        id:{
            name:'ID',
            type : new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteServicio = Servicio.findByIdAndRemove(params.id).exec()
        if(!deleteServicio) throw Error('Error al borrar el servicio')
        return deleteServicio
    }
}