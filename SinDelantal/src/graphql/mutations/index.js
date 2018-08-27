import Cupon from './cupon'
import Producto from './producto'
import Tipo_Restaurante from './tipo_Restaurante'
import Tienda from './tienda'
 export default {
    ...Cupon,
    ...Producto,
    ...Tipo_Restaurante,
    ...Tienda
} 