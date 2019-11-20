import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const ALL_JOBS = "ALL_JOBS"
export const ALL_JOBS_FAIL = "ALL_JOBS_FAIL"

export const JOBS_BY_ID = "JOBS_BY_ID"
export const JOBS_BY_ID_FAIL = "JOBS_BY_ID_FAIL"

export const JOBS_BY_USER_ID = "JOBS_BY_USER_ID"
export const JOBS_BY_USER_ID_FAIL = "JOBS_BY_USER_ID_FAIL"

export const NEW_JOB = "NEW_JOB"
export const NEW_JOB_FAIL = "NEW_JOB_FAIL"

export const UPDATE_JOB = "UPDATE_JOB"
export const UPDATE_JOB_FAIL = "UPDATE_JOB_FAIL"

export const DELETE_JOB = "DELETE_JOB"
export const DELETE_JOB_FAIL = "DELETE_JOB_FAIL"


////////////////////////////////////////////////////////////
/////////////////// ALL JOB  ////////////////////////////////
///////////////////////////////////////////////////////////////

export const allJobs = () => dispatch => {

    axiosWithAuth()
        .get('/api/jobs/')
        .then(response => {
        dispatch({
            type: ALL_JOBS, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: ALL_JOBS_FAIL,
        payload: error.response
        });
    });
    };

////////////////////////////////////////////////////////////
/////////////////// JOB LISTING ID ////////////////////////////////
///////////////////////////////////////////////////////////////

export const allJobsId = jobData => dispatch => {

     axiosWithAuth()
        .get(`/api/jobs/${jobData.id}`, jobData)
        .then(response => {
        dispatch({
            type: JOBS_BY_ID, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: JOBS_BY_ID_FAIL,
        payload: error.response
        });
    });
    };


/////////////////////////////////////////////////////////////////////
/////////////////// JOB LISTING USER ID ////////////////////////////////
///////////////////////////////////////////////////////////////


export const allJobsUserId = jobData => dispatch => {

    axiosWithAuth()
        .get(`/api/jobs/user/${jobData.id}`, jobData)
        .then(response => {
        dispatch({
            type: JOBS_BY_USER_ID, 
            payload: response.data
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: JOBS_BY_USER_ID_FAIL,
        payload: error.response
        });
    });
    };
    

////////////////////////////////////////////////////////////
/////////////////// EDIT/UPDATE JOB ///////////////////////////////
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
/////////////////// NEW   JOB////////////////////////////////
///////////////////////////////////////////////////////////////

    export const addJob = () => dispatch => {

        axiosWithAuth()
            .post(`/api/jobs/`)
            .then(response => {
            dispatch({
                type: NEW_JOB, 
                payload: response.data
            });
        })
            .catch(error => {
            console.log(error);
            dispatch({
            type: NEW_JOB_FAIL,
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