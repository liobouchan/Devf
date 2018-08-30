import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType
} from 'graphql'

import {type_RestaurantType} from './tipo_Restaurante'
import Tipo_Restaurante from '../../models/tipo_Restaurante'
import { ProductType } from './producto'
import Productos from '../../models/producto'

export const StoreType = new GraphQLObjectType({
  name: 'Tienda',
  description: 'Descripcion de las Tiendas en el sistema',
  fields: () => ({
    _id: {
      type : GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type : GraphQLString
    },
    direccion: {
      type : GraphQLString
    },
    correo: {
      type : GraphQLString
    },
    telefono: {
      type : GraphQLInt
    },
    tipo_Restaurante: {
      type : type_RestaurantType,
      resolve(tipo){
        const{tipo_Restaurante} = tipo
        return Tipo_Restaurante.findById(tipo_Restaurante).exec()
      }
    },
    calificacion: {
      type : GraphQLString
    },
    horario: {
      type : GraphQLString
    },
    descripcion: {
      type : GraphQLString
    },
    foto: {
      type : GraphQLString
    },
    costo: {
      type : GraphQLString
    },
    productos: {
      type : ProductType,
      resolve(product){
        const{productos} = product
        return Productos.findById(productos).exec()
      }
    },
  })
});

export const StoreInputType = new GraphQLInputObjectType({
  name: 'addTienda',
  description: 'Descripcion de las Tiendas en el sistema',
  fields: () => ({
    nombre: {
      type : GraphQLString
    },
    direccion: {
      type : GraphQLString
    },
    correo: {
      type : GraphQLString
    },
    telefono: {
      type : GraphQLInt
    },
    tipo_Restaurante: {
      type : GraphQLNonNull(GraphQLID)
    },
    calificacion: {
      type : GraphQLString
    },
    horario: {
      type : GraphQLString
    },
    descripcion: {
      type : GraphQLString
    },
    foto: {
      type : GraphQLString
    },
    costo: {
      type : GraphQLString
    },
    productos: {
      type : GraphQLNonNull(GraphQLID)
    },
  })
});