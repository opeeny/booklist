import React, {createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

//book context to be consumed
export const BookContext = createContext();
 
const BookContextProvider = (props) => {
    const getLocalStorage = () => {
        const browserData = localStorage.getItem('books');
        console.log(browserData);
        return browserData ? JSON.parse(browserData) : [];//if no data, else return empty array
    };
    const [books, dispatch] = useReducer(bookReducer, [], getLocalStorage);
    //use Effect() runs has  a call-back function that runs every-time the data changes
    useEffect(() => {

        localStorage.setItem('books', JSON.stringify(books));//turning it into json

    }, [books])
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;



