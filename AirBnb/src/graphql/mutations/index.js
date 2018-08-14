import Servicio from './servicios'
import Propiedad from './propiedades'
import Caracteristica from './caracteristicas'
import Reservacion from './reservaciones'

export default {
    ...Servicio,
    ...Propiedad,
    ...Caracteristica,
    ...Reservacion
}