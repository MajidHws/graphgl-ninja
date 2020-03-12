import gql from 'graphql-tag';

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`

const addBookMutation = gql`
    mutation
    addBook($name: String!, $genre: String!, $authorId: ID!){
            addBook(name: $name, genre: $genre, authorId: $authorId){
                name
                id
            }
        }
    
`

const getBookQuery = gql`
    query getBookQuery($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author{
                id
                name
                books{
                    name
                }
            }
        }
    }
`



export {
    getBooksQuery,
    getAuthorsQuery,
    addBookMutation,
    getBookQuery
}