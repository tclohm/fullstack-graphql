import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

const link = new HttpLink({uri: 'https://rickandmortyapi.com/graphql'});

// MARK: cache
const cache = new InMemoryCache();


// MARK: -- simple way to create apollo client
const client = new ApolloClient({
	link,
	cache
});

const query = gql`
	{
		characters {
			results {
				id
				name
			}
		}	
	}
`;

client.query({query})
	  .then(result => console.log(result))

export default client;