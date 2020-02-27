import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1';

//book context to be consumed
export const BookContext = createContext();
 
const BookContextProvider = (props) => {
    
    const [books, setBooks] = useState([
        {title: 'Name of wind', author: 'Opeeny G', id: 1},
        {title: 'Poetyr', author: 'Hendrine Horone', id: 2},
        {title: 'Jonny', author: 'Jx', id: 3}
    ]);
     const addBook = (title, author) => {
        //...books, makes copy of books array be4 the state is altered
         setBooks([...books, {title, author, id:uuid() }]);
     };
     const removeBook = (id) => {
         setBooks(books.filter(bk => bk.id !== id));
     };
    
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;