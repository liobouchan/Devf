import {
    GraphQLNonNull
} from 'graphql'

import Reservacion from '../../../models/reservaciones'
import {ReservacionesType, ReservacionesInputType} from '../../types/reservaciones'

export default {
    type: ReservacionesType,
    args:{
        data:{
            type: new GraphQLNonNull(ReservacionesInputType)
        }
    },
    resolve(root,params){
        const reservacion = new Reservacion(params.data)
        const newReservacion = reservacion.save()
        if(!newReservacion) throw Error("Error al crear una reservacion")
        return newReservacion
    }
}