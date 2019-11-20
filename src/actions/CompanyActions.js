import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

// export const ALL_JOB

export const UPDATE_JOB = "UPDATE_JOB"
export const UPDATE_JOB_FAIL = "UPDATE_JOB_FAIL"

export const DELETE_JOB = "DELETE_JOB"
export const DELETE_JOB_FAIL = "DELETE_JOB_FAIL"


////////////////////////////////////////////////////////////
/////////////////// DELETE JOB////////////////////////////////
///////////////////////////////////////////////////////////////

export const editJob = jobData => dispatch => {

    axiosWithAuth()
        .put(`/api/jobs/${jobData.id}`, jobData)
        .then(response => {
        dispatch({
            type: UPDATE_JOB, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: UPDATE_JOB_FAIL,
        payload: error.response
        });
    });
    };


////////////////////////////////////////////////////////////
/////////////////// DELETE JOB////////////////////////////////
///////////////////////////////////////////////////////////////

export const deleteJob = jobData => dispatch => {
    axiosWithAuth()
        .delete(`/api/jobs/${jobData.id}`, jobData)
        .then(response => {
            console.log(response)
        dispatch({
            type: DELETE_JOB, 
            payload: response.data
        });
        })
        .catch(error => {
        console.log(error);
        dispatch({
        type: DELETE_JOB_FAIL,
        payload: error.response
        });
    });
}