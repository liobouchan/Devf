import{
    GraphQLList
} from 'graphql'

import Reservaciones from '../../../models/reservaciones'
import {ReservacionesType} from '../../types/reservaciones'

const queryAllReservaciones = {
    type: new GraphQLList(ReservacionesType),
    resolve(){
        const reservacion = Reservaciones.find().exec();
        return reservacion;
    }
}
export default queryAllReservaciones;
