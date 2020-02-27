import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
//bk destructured as a prop
const BookDetails = ({ bk }) => {
    const { removeBook } = useContext(BookContext)
    return ( 
        <li onClick = {() => removeBook(bk.id)}>
            <div className = "title">{bk.title}</div>
            <div className = "author">{bk.author}</div>
        </li>
     );
}
 
export default BookDetails;