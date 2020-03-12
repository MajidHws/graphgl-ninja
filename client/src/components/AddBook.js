import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

const AddBook = () => {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const [addBook, { loading, data, error }] = useMutation(addBookMutation)

    const _submitForm = (e) => {
        e.preventDefault()


        addBook({
            variables: { name: name, genre: genre, authorId: authorId },
            refetchQueries: [
                {query: getBooksQuery}
            ]
        })
        if (loading) return 'loading'
        setName('')
        setGenre('')
        setAuthorId('')
    }

    const _displayAuthors = () => {
        const { data, error, loading } = useQuery(getAuthorsQuery)
        return (
            <div className="main">

                <form onSubmit={_submitForm}>
                    <div>
                        <label htmlFor="name">Book name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="genre">Genre</label>
                        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <select name="" id="" value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                            {loading ? (<option value="">Loading</option>) : (
                                data.authors.map((author, i) => <option key={i} value={author.id}>{author.name}</option>)
                            )}
                        </select>
                    </div>
                    <div className="">
                        <button className="">Add</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="main">

            {_displayAuthors()}
        </div>
    );

}

export default AddBook