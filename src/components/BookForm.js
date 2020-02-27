import React, {useState, useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    //
    const handleSubmit = (e) => {
      
        e.preventDefault();
        console.log(title, author);
        //Type then action or payload e.g book property
        dispatch({type: 'ADD_BOOK', bk: {title, author}});
        setTitle('');
        setAuthor('');
       
    }
    return (  
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "title" value = {title} onChange = {(e) => setTitle(e.target.value)} placeholder = "Book title" required/>
            <input type = "text" name = "author" value = {author} onChange = {(e) => setAuthor(e.target.value )} placeholder = "Author's name" required/>
            <input type = "submit" value = "add book"/>
        </form>
    );
}
 
export default BookForm;