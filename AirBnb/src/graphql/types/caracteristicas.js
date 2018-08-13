import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'

export const CaracteristicasType = new GraphQLObjectType({
  name: 'Caracteristicas',
  description: 'Caracteristicas básicas de una casa a rentar',
  fields: () => ({
    _id: {
      type : GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type : GraphQLString
    },
    descripcion: {
      type : GraphQLString
    },
    numero: {
      type : GraphQLInt
    }
  })
});
