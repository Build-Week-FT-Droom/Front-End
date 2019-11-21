import React, { useEffect, useState } from 'react';
import axios from "axios";
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

  const [searchResults, setSearchResults] = useState([]);
  const [change, setChange] = useState("off")
  
  useEffect(() => {
    axios.get('https://droombw.herokuapp.com/api/jobs')
    .then(res => {
      
      // setCharacters(res.data.results);
      setSearchResults(res.data);
      
      console.log('resdata',res);
    })
    .catch(err => console.log(err));
  }, [change]);

  // toggling for Search, when 'Dream Jobs' is clicked, it will show all items again after search viewed.
  const Mychange= () => {
   
    change === "off" ? setChange("on") : setChange("off")
  }

  const search = (newArray) => {
    setSearchResults(newArray);
  };
  //const token = localStorage.getItem("token");

  return (
    <div className="App" className="nav-links">
      <WrapNav>
        <a href= "https://unruffled-lewin-f72cd0.netlify.com/index.html" className="nav-link">Home</a>
        <Link to="/" className="nav-link">Welcome</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/userprofile" className="nav-link">My Profile</Link>
        <Link to="/joblist" className="nav-link" onClick={Mychange} >Dream Jobs</Link>

        <Link to="/company-profile" className="nav-link">Career Profile</Link>
       
        <Header />
      </WrapNav>
      {/* {token === null ? (
    <>   */}
      <Route exact path="/" component ={Welcome} />
      <Route path="/signup" component ={FormikRegistForm} />
      <Route path="/signin" component ={Signin} />
    {/* </>
    ) : (
    <> */}
      <PrivateRoute path="/userprofile" component ={Userprofile} />

     <Route path="/joblist" render = {props => <Joblist searchResults = {searchResults} search= {search}/>} />

   
      <Route exact path="/jobcard/:id" render = {props => <JobCard {...props} searchResults = {searchResults} cat="yesMatch"  search={search}/>} />
      <PrivateRoute path="/edit-profile/:id" component={UpdateUserProfile}/>
      <Route path="/company-profile" component={CompanyProfile}/>
    
    {/* </>  
    )} */}
       
    </div>
  );
}

export default App;
