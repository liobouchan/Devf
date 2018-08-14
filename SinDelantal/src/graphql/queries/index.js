import user from "./user";
import cupon from './cupon'
import pedido from './pedido'

export default{
    ...user,
    ...cupon,
    ...pedido
}