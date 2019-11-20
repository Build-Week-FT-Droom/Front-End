import React from 'react';

import { connect } from "react-redux";
import { editJob } from "../actions/CompanyActions";

import CompanyForm from '../forms/CompanyForm';
import CompanyJobForm from '../forms/CompanyJobForm';

const CompanyProfile = props => {
    return (
        <div>
            <h1>COMPANY PROFILE</h1>
            {/* <CompanyForm/>
            <CompanyJobForm/> */}
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
    { editJob }
  )(CompanyProfile);

//export default CompanyProfile;