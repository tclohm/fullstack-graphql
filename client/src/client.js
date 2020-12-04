import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloLink } from 'apollo-link'
import gql from 'graphql-tag'

const link = new HttpLink({uri: 'http://localhost:4000/'});

// const delay = setContext(
// 	request => 
// 	new Promise((success, fail) => {
// 		setTimeout(() => {
// 			success()
// 		}, 800)
// 	})
// )

// MARK: -- middleware
// const link = new ApolloLink.from({
// 	delay,
// 	http
// })

// MARK: cache
const cache = new InMemoryCache();


// MARK: -- simple way to create apollo client
const client = new ApolloClient({
	link,
	cache
});

export default client;