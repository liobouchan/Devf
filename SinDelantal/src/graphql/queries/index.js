import user from "./user";
import cupon from './cupon'
import pedido from './pedido'
import tipo_Restaurante from './tipo_Restaurante'
import producto from './producto'

export default{
    ...user,
    ...cupon,
    ...pedido,
    ...tipo_Restaurante,
    ...producto
}