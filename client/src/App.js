import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import BookList from './components/BookList'
function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Ninja Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
