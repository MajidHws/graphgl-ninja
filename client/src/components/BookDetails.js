import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { getBookQuery } from '../queries/queries'

const BookDetails = ({ bookId }) => {




    const _renderBooks = () => {
        const { loading, error, data } = useQuery(getBookQuery, { variables: { "id": bookId } });
        console.log('book ID is', bookId);
        if (loading) return 'Loading'
        console.log(data)

        const { book: { name, genre, author } } = data
        return (
            <div>
                <h2>{name}</h2>
                <p>{genre}</p>
                <p>{author.name}</p>
                <p>All Author Books:</p>
                <ul>
                    {
                        author.books.map((book, i) => <li key={i}>{book.name}</li> )
                    }
                </ul>
            </div>
        )
    }

    return (
        <div>
            {_renderBooks()}
        </div>
    );

}

export default BookDetails