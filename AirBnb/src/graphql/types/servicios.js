import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql'

export const ServiciosType = new GraphQLObjectType({
  name: "Servicios",
  description: "Descripcion de servicios que se proveen en la casa",
  fields: () => ({
    _id:{
      type: GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type:GraphQLString
    },
    descripcion:{
      type:GraphQLString
    }
  })
});

export const ServiciosInputType = new GraphQLInputObjectType({
  name: "addServicios",
  descripcion: "Mutation para agregar propiedades",
  fields: () => ({
    nombre: {
      type:GraphQLString
    },
    descripcion:{
      type:GraphQLString
    }
  })
});