import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'

export const UserType = new GraphQLObjectType({
  name: 'Usuarios',
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
    correo: {
      type : GraphQLString
    },
    fecha_nacimiento: {
      type : GraphQLString
    },
    username: {
      type : GraphQLString
    },
    genero: {
      type : GraphQLString
    },
    pais: {
      type : GraphQLString
    },
    ubicacion: {
      type : GraphQLString
    },
    rol: {
      type : GraphQLString
    },
    foto: {
      type : GraphQLString
    }
  })
});
