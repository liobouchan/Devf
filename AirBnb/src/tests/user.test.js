import {graphql} from 'graphql'
import {setUpTest} from './helpers'
import schema from '../graphql/index'
import User from '../models/users'
import generarToken from '../resolvers/createToken'

describe('Prueba de User' , async () =>{
    beforeEach(async () => await setUpTest)
    it('Probando Query din Token deberia ser null', async () =>{
        const query = `
            query{
                me{
                    _id,
                    name
                }
            }
        `;

        const result = await graphql(schema,query,{},{})
        const {data} = result;
        console.log(data)
        expect(data.me).toBe(null)
    })
})

it('Suma de 2 mas 2', () => {
    expect(2+2).toBe(4)
});