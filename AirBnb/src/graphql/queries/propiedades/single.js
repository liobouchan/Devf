import{GraphQLNonNull, GraphQLID} from 'graphql'

import Propiedad from '../../../models/users'
import {PropiedadesType} from '../../types/users'

const querySinglePropiedad = {
    type: PropiedadesType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const propiedad = Propiedad.findById(params.id).exec();
        return propiedad;
    }
}

export default querySinglePropiedad;