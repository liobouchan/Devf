import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

export const type_RestaurantType = new GraphQLObjectType({
  name: 'tipo_Restaurante',
  description: 'Que tipo de restaurante es la comida'
  fields: () => ({
    _id: {
      type : GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type : GraphQLString
    },
    descripcion: {
      type : GraphQLString
    }
  })
});
