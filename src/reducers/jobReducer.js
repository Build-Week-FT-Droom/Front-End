import {

    FETCH_JOBS,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAIL,

    JOBS_BY_ID,
    JOBS_BY_ID_FAIL,
    
    JOBS_BY_USER_ID,
    JOBS_BY_USER_ID_FAIL,
    
    NEW_JOB_SUCCESS,
    NEW_JOB_FAIL,
    
    UPDATE_JOB, 
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAIL, 
    
    DELETE_JOB,
    DELETE_JOB_FAIL,

  } from "../actions/CompanyActions";

  const initialState = {
    job:'',
    jobDeleted: false,
    loading: false,
    error: null
  };


  export const jobReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_JOBS: 
        return {
            ...state,
            loading: true, 
            error: ''
        };

    case FETCH_JOBS_SUCCESS: 
        return {
            ...state,
            job: action.payload,
            loading: false, 
            error: ''
        };
 
    case FETCH_JOBS_FAIL: 
        return {
            ...state,
            error: action.payload
        };

////////////////////////////////////////////////////////////////
//////////////////NEW JOB  //////////////////////////////////
////////////////////////////////////////////////////////////////
        case NEW_JOB_SUCCESS: 
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
/////////////////////////////////////////
        case DELETE_JOB: 
        return {
            ...state,
            jobDeleted: action.payload,
            error: '',
            loading: false
        } 

    case DELETE_JOB_FAIL: 
        return {
            ...state,
            error: action.payload,
            loading: false
        }  

///////////////UPDATE JOBS////////////////////////////

    case UPDATE_JOB:
            return {
                ...state,
                loading: true, 
                error: ''
            }


    case UPDATE_JOB_SUCCESS:
            return {
                ...state,
                job: action.payload,
                loading: false, 
            }

    case UPDATE_JOB_FAIL:
            return {
                ...state,
                error: action.payload
            }
    }
}