import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

export const UserType = new GraphQLObjectType({
  name: 'Usuario',
  description: 'Usuarios de la Base de Datos',
  fields: () => ({
    _id: {
      type : GraphQLNonNull(GraphQLID)
    },
    nombre: {
      type : GraphQLString
    },
    apellidos: {
      type : GraphQLString
    },
    fecha_nacimiento: {
      type : GraphQLString
    },
    correo: {
      type : GraphQLString
    },
    telefono: {
      type : GraphQLInt
    },
    genero: {
      type : GraphQLString
    },
    username: {
      type : GraphQLString
    },
    foto: {
      type : GraphQLString
    },
    direcciones: {
      type : GraphQLList(GraphQLString)
    },
    card: {
      type : GraphQLList(GraphQLString)
    }
  })
});
