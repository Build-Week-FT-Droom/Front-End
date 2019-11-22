import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAIL = "FETCH_USER_FAIL"

export const FETCH_REGISTER_USER_SUCCESS = 'FETCH_REGISTER_USER_SUCCESS'


export const DELETE_USER = "DELETE_USER"
export const DELETE_USER_FAIL = "DELETE_USER_FAIL" 

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL"

export const FETCH_USERS = "FETCH_USERS"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL"

////////////////////////////////////////////////////////////////////////
////////////////  POST LOGIN and REGISTER USER/////////////////////////////
////Used in FORMIKREGISTER and SIGNIN form

// export const loginUser = (login) => dispatch => {
//     axiosWithAuth()
//     .post('https://droombw.herokuapp.com/api/auth/login', login)
//     .then(res => {
//         localStorage.setItem('token', res.data);
//         //props.history.push('/');
//       })
//       .catch(err => console.log(err));
// }

// export const registerUser = () => dispatch => {
//     axios
//     .post('https://droombw.herokuapp.com/api/auth/register')
//     .then(response => {
//       dispatch({
//       type: FETCH_REGISTER_USER_SUCCESS,
//       payload: response.data
//       });
//   })
//       .catch(err => console.log(err));
// }

////////////////////////////////////////////////////////
//////////////// FETCH USER /////////////////////////////
////////////////////////////////////////////////////////

export const fetchUser = id => dispatch => {
    dispatch({type: FETCH_USER});
    axiosWithAuth()
        .get(`/api/auth/user/${id}`)
        .then(response => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: response.data
        });
        })

        .catch(error => {
        console.log(error);
        dispatch({
            type: FETCH_USER_FAIL,
            payload: error.response
            
            });
        });
    };

////////////////////////////////////////////////////////
//////////////// EDIT USER /////////////////////////////
////////////////////////////////////////////////////////

export const updateUser = (user, id) => dispatch => {
console.log(user, 'USER DATAAAA')
    axiosWithAuth()
        .put(`/api/auth/user/${id}`, user)
        .then(response => {
        dispatch({
            type: UPDATE_USER_SUCCESS, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response
        });
    });
    };

/////////////////////////////////////////////////////////
/////////////// DELETE USER   ///////////////////////////
////////////////////////////////////////////////////////

export const deleteUser = id => dispatch => {
    return axiosWithAuth()
        .delete(`/api/auth/user/${id}`)
        .then(response => {
            console.log(response)
            localStorage.removeItem('token');
              
        dispatch({
            type: DELETE_USER, 
            payload: response.data
        });
        })
        .catch(error => {
        console.log(error);
        dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response
        });
    });
}




/////////////////////////////////////////////////////////
/////////////// GET ALL USERS ///////////////////////////
////////////////////////////////////////////////////////

export const fetchAllUsers = () => dispatch => {
    dispatch({type: FETCH_USERS});
    axiosWithAuth()
    .get('/api/auth/users/')
    .then(response => {
      dispatch({
        type: FETCH_USERS_SUCCESS, 
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
      type: FETCH_USERS_FAIL,
      payload: error.response
    });
  });

};