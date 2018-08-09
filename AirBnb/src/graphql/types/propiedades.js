import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

import {UserType} from './users'
import User from '../../models/users'
import {CaracteristicasType} from './caracteristicas'
import Caracteristica from '../../models/caracteristicas'
import Servicio from '../../models/servicios'
import {ServiciosType} from './servicios'

export const CalificacionType = new GraphQLObjectType({
  name: "Calificacion",
  description: "Descripcion de las Calificaciones de las propiedades",
  fields: () => ({
    _id:{
      type: GraphQLNonNull(GraphQLID)
    },
    comentarios: {
      type:GraphQLString
    },
    estrellas:{
      type:GraphQLString
    }
  })
});

export const PropiedadesType = new GraphQLObjectType({
  name: "Propiedades",
  description: "Descripcion de las propiedades",
  fields: () => ({
    _id:{
      type: GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type:GraphQLString
    },
    descripcion_corta:{
      type:GraphQLString
    },
    descripcion_larga:{
      type:GraphQLString
    },
    ubicacion:{
      type:GraphQLString
    },
    pais:{
      type:GraphQLString
    },
    user:{
      type: UserType,
      resolve(propiedad){
        const {user} = propiedad
        return User.findById(user).exec()
      }
    },
    tipo:{
      type:GraphQLInt
    },
    precio:{
      type:GraphQLInt
    },
    calificacion:{
      type:new GraphQLList(CalificacionType)
    },
    caracteristicas:{
      type: new GraphQLList(CaracteristicasType),
      resolve(propiedad){
        const {caracteristicas} = propiedad
        return Caracteristica.find({_id:{$in:caracteristicas}}).exec()
      }
    },
    servicios:{
      type: new GraphQLList(ServiciosType),
      resolve(propiedad){
        const {servicios} = propiedad
        return Servicio.find({_id:{$in:servicios}}).exec()
      }
    },
    fotos:{
      type:GraphQLList(GraphQLString),
    },
    disponibilidad_inicial:{
      type:GraphQLString
    },
    disponibilidad_final:{
      type:GraphQLString
    }
  })
});
