import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAIL = "FETCH_USER_FAIL"

export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL"

export const fetchUser = () => dispatch => {
    dispatch({type: FETCH_USER});
    axiosWithAuth()
    .get(`/api/users/${id}`)
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

export const updateUser = userData => dispatch => {

    axiosWithAuth()
    .put(`/api/users/${userData.id}`, userData)
    .then(response => {
      dispatch({
        type: UPDATE_USER, 
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
