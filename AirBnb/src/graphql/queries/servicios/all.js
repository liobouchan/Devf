import{
    GraphQLList
} from 'graphql'

import Servicios from '../../../models/servicios'
import {ServiciosType} from '../../types/servicios'

const queryAllServicios = {
    type: new GraphQLList(ServiciosType),
    resolve(){
        const servicio = Servicios.find().exec();
        return servicio;
    }
}
export default queryAllServicios;
