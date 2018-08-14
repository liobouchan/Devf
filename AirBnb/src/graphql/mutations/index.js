import Servicio from './servicios'
import Propiedad from './propiedades'
import Caracteristica from './caracteristicas'

export default {
    ...Servicio,
    ...Propiedad,
    ...Caracteristica
}