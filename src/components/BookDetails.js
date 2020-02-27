import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
//bk destructured as a prop
const BookDetails = ({ bk }) => {
    const { dispatch } = useContext(BookContext)
    return ( 
        <li onClick = {() => dispatch({type: 'REMOVE_BOOK', id: bk.id})}>
            <div className = "title">{bk.title}</div>
            <div className = "author">{bk.author}</div>
        </li>
     );
}
 
export default BookDetails;