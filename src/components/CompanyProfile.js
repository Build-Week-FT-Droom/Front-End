import React from 'react';

import { connect } from "react-redux";
import { updateJob } from "../actions/CompanyActions";

import CompanyForm from '../forms/CompanyForm';
import CompanyJobForm from '../forms/CompanyJobForm';

const CompanyProfile = props => {
    return (
        <div>
            <h1>COMPANY PROFILE</h1>
            
            
            <CompanyJobForm />
        </div>  


    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {
    
    };
  };

export default connect(
    mapStateToProps,
    { updateJob }
  )(CompanyProfile);

//export default CompanyProfile;