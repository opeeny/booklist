import uuid from 'uuid/v1';

//all the application's state logic is one place
export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            //state represents the current available book object
            //ADD_BOOK, add new data
            return([...state, {
                title: action.bk.title,
                author: action.bk.author,
                id: uuid()
                }]);
                //alert('vvv')
         //console.log(bk);
        case 'REMOVE_BOOK':
            return state.filter(bk => bk.id !== action.id);
        default: 
        return state;
        //console.log(state);
    }
}
