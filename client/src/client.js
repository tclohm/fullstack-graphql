import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

const link = new HttpLink({uri: 'http://localhost:4000/'});

// MARK: cache
const cache = new InMemoryCache();


// MARK: -- simple way to create apollo client
const client = new ApolloClient({
	link,
	cache
});

export default client;