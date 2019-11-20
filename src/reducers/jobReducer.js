import {
    ALL_JOBS,
    ALL_JOBS_FAIL,

    JOBS_BY_ID,
    JOBS_BY_ID_FAIL,
    
    JOBS_BY_USER_ID,
    JOBS_BY_USER_ID_FAIL,
    
    NEW_JOB,
    NEW_JOB_FAIL,
    
    UPDATE_JOB, 
    UPDATE_JOB_FAIL, 
    
    DELETE_JOB,
    DELETE_JOB_FAIL,

  } from "../actions/CompanyActions";

  const initialState = {
    job:'',
    loading: false,
    error: null
  };


  export const jobReducer = (state = initialState, action) => {
    switch (action.type) {

        case NEW_JOB: 
            return {
                ...state,
                job: action.payload,
                loading: true, 
                error: ''
            };
        
        case  NEW_JOB_FAIL: 
            return {
            ...state,
            error: action.payload,
            loading: false
        };






    }
}