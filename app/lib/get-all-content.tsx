
import { ApolloClient, InMemoryCache, gql, ApolloError } from '@apollo/client'
import { ContentfulResponse } from '../types';
const {CONTENTFUL_PREVIEW_API,CONTENTFUL_DELIVERY_API,CONTENTFUL_SPACE_ID,CONTENTFUL_URL,CONTENTFUL_ENVIRONMENT} = process.env;

export const client = new ApolloClient({
  uri: `${CONTENTFUL_URL}${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`,
  cache: new InMemoryCache(),
})
export async function UseContent(
  query: string,
  variables: any,
  draftMode = false
  ): Promise<ContentfulResponse> {
  try {
console.log({ Authorization: `Bearer ${
    draftMode
      ? CONTENTFUL_PREVIEW_API
      :"HBtfkbm6DU-SoSUr3hSQWyD6ShxHzvr3cae7meeZ31w"
  }`,})
    const { data } = await client.query({
      query: gql`${query}`,
      variables:variables,
      context: {
        headers: {
          Authorization: `Bearer ${
            draftMode
              ? CONTENTFUL_PREVIEW_API
              : 'HBtfkbm6DU-SoSUr3hSQWyD6ShxHzvr3cae7meeZ31w'
          }`,
        },
      },
    })


    return {
      data,
      ok: true,
    }
  } catch (error) {
    const apolloError = error as ApolloError
    const errorMessage = apolloError.message || 'Internal Service Error'
    return {
      error: errorMessage,
      ok: false,
    }
  }
}