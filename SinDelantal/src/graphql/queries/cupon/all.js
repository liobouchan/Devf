import {
    GraphQLList
} from 'graphql'

import Cupon from '../../../models/cupon'
import {CuponType} from '../../types/cupon'

const queryAllCupones = {
    type: new GraphQLList(CuponType),
    resolve(){
        const cupon = Cupon.find.exec();
        return cupon;
    }
}
export default queryAllCupones;