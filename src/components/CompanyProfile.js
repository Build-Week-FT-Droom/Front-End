import React from 'react';
import CompanyForm from '../forms/CompanyForm';
import CompanyJobForm from '../forms/CompanyJobForm';

function CompanyProfile() {
    return (
        <div>
            <h1>COMPANY PROFILE</h1>
            <CompanyForm/>
            <CompanyJobForm/>

        </div>  


    )
}

export default CompanyProfile;