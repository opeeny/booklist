import React, {useReducer} from 'react';
import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return([...state, 
                {title: action.bk.title},
                {author: action.bk.author},
                {id: uuid()}
            ]);
        case 'REMOVE_BOOK':
            return state.filter(bk => bk.id !== action.id);//keeps and object in the array or removes??
        default:
            return state;
    }
}