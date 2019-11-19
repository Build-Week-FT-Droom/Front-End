import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,

    UPDATE_USER,
    UPDATE_USER_FAIL,

    DELETE_USER,
    DELETE_USER_FAIL,

    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL

  } from "./actions";
  
  const initialState = {
    user: {},
    users: [],
    loading: false,
    userDeleted: false,
    error: null
    
  };
  
  export const userReducer = (state = initialState, action) => {
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

//////////////////////////////////////////////////////////////
//////////////// DELETE USER  ////////////////////////////////
//////////////////////////////////////////////////////////////

        case DELETE_USER: 
            return {
                ...state,
                userDeleted: action.payload,
                error: '',
                loading: false
            } 

        case DELETE_USER_FAIL: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }  

///////////////////////////////////////////////////////////////
////////////////  ALL USERS  //////////////////////////////////
//////////////////////////////////////////////////////////////


        case  FETCH_USERS: 
            return {
                ...state,
                loading: true, 
                error: ''
            };

        case  FETCH_USERS_SUCCESS: 
            return {
                ...state,
                users: action.payload,
                loading: false, 
                error: ''
            };

        case  FETCH_USERS_FAIL: 
            return {
                ...state,
                error: action.payload
            } 
  }
}