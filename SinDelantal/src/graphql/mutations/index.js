import Cupon from './cupon'
import Producto from './producto'
import Tipo_Restaurante from './tipo_Restaurante'
import Tienda from './tienda'
import Pedido from './pedido'
 export default {
    ...Cupon,
    ...Producto,
    ...Tipo_Restaurante,
    ...Tienda,
    ...Pedido
} 