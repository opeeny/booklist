import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext";
import BookDetails from './BookDetails'
const BookList = () => {

    const { books } = useContext(BookContext)//destructure what we want from the context in this component
    //evaluate books, if it has length
    console.log(books.length);
   
        return books.length ? (  
            <div className = "book-list">
                <ul>
                    {
                        books.map(bk => {
                            return(<BookDetails bk = {bk} key = {bk.id}/>)
                        })}
                </ul>
            </div>
        ) : (
            <div className = "empty">No Books in the store, Enjoy free time :)</div>
        );
    
    
   
    //
}
 
export default BookList;