import React from 'react';

import './App.css';
import FormikRegistForm from './forms/FormikRegistForm';
import {Route, Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import Header from './components/Header';
import { Form } from 'formik';
import Userprofile from './components/Userprofile';
import Joblist from './components/Joblist';
import JobCard from './components/JobCard';
import Signin from './forms/Signin';
import styled from 'styled-components';

import PrivateRoute from './utils/PrivateRoute';
import UpdateUserProfile from './components/UpdateUserProfile';
import CompanyProfile from './components/CompanyProfile';

const WrapNav = styled.div`
background-color: #333;
height: 15vh;
color: white;

padding: 20px;

`;

function App() {
  return (
    <div className="App" className="nav-links">
      <WrapNav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/userprofile" className="nav-link">My Profile</Link>
        <Link to="joblist" className="nav-link">Dream Jobs</Link>

        <Link to="/company-profile" className="nav-link">Career Profile</Link>
        
        <Header />
      </WrapNav>
      
      <Route exact path="/" component ={Welcome} />
      <Route path="/signup" component ={FormikRegistForm} />
      <Route path="/signin" component ={Signin} />
      <PrivateRoute path="/userprofile" component ={Userprofile} />
      <Route path="/joblist" component = {Joblist} />

      <Route path="/jobcard/:id" component = {JobCard} />

      

      <PrivateRoute path="/edit-profile/:id" component={UpdateUserProfile}/>
      {/* <PrivateRoute path="/company-profile" component={CompanyProfile}/> */}
      <Route path="/company-profile" component={CompanyProfile}/>

    </div>
  );
}

export default App;
