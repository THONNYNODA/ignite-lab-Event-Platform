import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omp3e60iu401xkag3f5fdl/master',
    cache: new InMemoryCache()
});