import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails';


const BookList = () => {

    // const { data, error, loading } = useQuery(getBooksQuery)
    // console.log(data)
    const [selected, setSelected] = useState(null)

    const _renderBooks = () => {
        const { loading, error, data } = useQuery(getBooksQuery);
        if (loading) return 'loading'
        console.log(data)
        return data.books.map((book, i) => <li onClick={() => setSelected(book.id)} key={i}>{book.name}</li>)
    }


    return (
        <div className="main">
            <ul id="book-list">
                {
                    _renderBooks()
                }
            </ul>
            {selected? (<BookDetails bookId={selected} />) : null}
        </div>
    );

}

export default BookList
