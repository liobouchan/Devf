import{
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Cupon from '../../../models/cupon'
import { CuponType } from '../../types/cupon';

const querySingleCupon = {
    type: CuponType,
    args:{
        id: {
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const cupon = Cupon.findById(params.id).exec();
        return cupon;
    }
}

export default querySingleCupon;
