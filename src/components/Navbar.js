import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';


const Navbar = () => {
    //To destrucure, is like to separate part of the array into separate elements(args)
    const { books } = useContext(BookContext);
    //if(movies.length !== 0)//
    return (  
        <div className = "navbar">
            <h1>Hedrine's watching Movie list</h1>
            <p>Currently you have { books.length } to get started</p>
        </div>
    );
}
 
export default Navbar;