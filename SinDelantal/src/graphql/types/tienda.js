import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

export const StoreType = new GraphQLObjectType({
  name: 'Tienda',
  description: 'Descripcion de las Tiendas en el sistema'
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
      type : Number
    },
    tipo_Restaurante: {
      type : type_RestaurantType
      resolve(tipo){
        const{tipo_Restaurante} = tipo
        return Tipo_Restaurante.findById(tipo_Restaurante).exec()
      }
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