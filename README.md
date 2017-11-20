# Apollo Client Error Template

Related Issues:
- https://github.com/apollographql/apollo-client/issues/2258
- https://github.com/apollographql/apollo-client/issues/2513
- https://github.com/apollographql/react-apollo/issues/1229
- https://github.com/apollographql/apollo-client/issues/2533

#### This template demonstrate multiple issues :

- An unhandled network error when unmounting a component that failed to fetch
- Undefined response in afterware for a network error (e.g. client offline or server crashed)
- Component can't render data after an error (stuck on error)

#### How it works

This template is using the Fake graphql server from : http://fake.graphql.guru/

You'll have to simulate an offline state (e.g with chrome developer tools -> Network), this is the same behavior as server offline or crashed.

The "New component with apollo" button calls a component with apolloClient HOC querying a random firstname

#### Steps to reproduce issues

- run `yarn` then `yarn start` (or `npm install` then `npm run start`)
- Go offline, click button to fetch then unmount the component to throw the error in console
- Go online then try to fetch/refetch, the component still displays error (but queries are sent and return data)
