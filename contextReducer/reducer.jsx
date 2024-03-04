import React from 'react'

export const actionType = {
    SET_NAME: "SET_NAME",
    CLEAR_NAME: "CLEAR_NAME",
    SET_AGE: "SET_AGE",
    CLEAR_AGE: "CLEAR_AGE",
  };

  export const initialState={
    name:"",
    age:0
  }

const reducer = (state, action) => {
    switch(action.type){
        case actionType.SET_NAME:
        return {
            ...state,
            author: action.author
        };
        case actionType.CLEAR_NAME:
        return {
            ...state,
        author: ""
        };
        case actionType.SET_AGE:
        return {
            ...state,
            age: action.age
        };
        case actionType.CLEAR_AGE:
        return {
            ...state,
             age: 0
        };
    

        default:
            return state;
            
    }
 
}

export default reducer
