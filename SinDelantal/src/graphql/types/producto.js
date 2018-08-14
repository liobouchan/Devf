import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'
import { StoreType } from './tienda';
import Tienda from '../../models/tienda'

export const ProductType = new GraphQLObjectType({
    name:'Producto',
    description: 'Productos que se van a poder vender en las tiendas',
    fields: () => ({
        _id:{
            type: GraphQLNonNull(GraphQLID)
        },
        nombre: {
            type : GraphQLString
        },
        precio: {
            type : GraphQLString
        },
        foto: {
            type : GraphQLString
        },
        descripcion: {
            type : GraphQLString
        },
        tipo: {
            type : GraphQLString
        },
        tienda: {
            type : StoreType,
            resolve(store){
                const{tienda} = store
                return Tienda.findById(tienda).exec()
            }
        }
    })
})