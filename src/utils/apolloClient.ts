import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://api.local.avocar.fr/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
