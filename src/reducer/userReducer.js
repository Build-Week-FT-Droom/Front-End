import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,

    UPDATE_USER,
    UPDATE_USER_FAIL

    DELETE_USER,
  
  } from "./actions";
  
  const initialState = {
    loading: false,
    user: {},
    error: null,
    userDeleted: false
  };
  
  export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCH_USER: 
        return {
            ...state,
            loading: true, 
            error: ''
          };

      case FETCH_USER_SUCCESS: 
        return {
            ...state,
            user: action.payload,
            loading: false, 
            error: ''
          };
     
      case FETCH_USER_FAIL: 
        return {
            ...state,
            error: action.payload
          };

      case UPDATE_USER:
          return {
            ...state,
            user: action.payload,
            loading: false, 
          }

      case UPDATE_USER_FAIL:
          return {
              ...state,
            error: action.payload
          }

      case DELETE_USER: 
        return {
          ...state,
          userDeleted: action.payload,
          error: action.payload,
          loading: action.payload
        }
        
  }
}