import {UserType} from '../../types/user'

export default {
    type: UserType,
    resolve(root,params,context){
        return context.user
    }
}