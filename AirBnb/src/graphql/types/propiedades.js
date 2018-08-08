import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import {UserType} from './users'
import User from '../../models/users'

export const PropiedadesType = new GraphQLObjectType({
  name: "Propiedades",
  description: "Descripcion de las propiedades"
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
    }
  })
});
