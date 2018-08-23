import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import CONST from './const';

const httplink ({
    uri: CONST.API_URL+'graphql'
});

const authLink = setContext((_,{headers}) => {
    const token = localStorage.getItem('token');
    return{
        headers:{
            ...headers,
            authorization: token ? `JWT ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httplink),
    caches:new InMemoryCache()
})

export default client;