import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import BookList from './components/BookList'
import AddBook from './components/AddBook';
function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
  })

  useEffect(() => {
    // _fetch()
  }, [])

  // const _fetch = async () => {
  //   const res = await fetch('http://localhost:4000/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: `{ 
  //         books{
  //           id 
  //           name 
  //           author{
  //             id 
  //             name
  //             books{
  //               name 
  //               author{
  //                 name
  //               }
  //             }
  //           }
  //         } 
  //       }`
  //     })
  //   })
  //   const { data: { books } } = await res.json()
  //   console.log(books)
  // }


  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Ninja Reading List</h1>
        <BookList />
        <hr />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
