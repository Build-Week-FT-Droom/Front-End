import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";

import { fetchUser, updateUser, deleteUser } from "../actions/userActions";

const UpdateUserProfile = props => {
  
  const [userInfo, setUserInfo] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    occupation:"",
    interests:[],
    // employer:""
  });

  
  useEffect(() => {
    if(userInfo.email === ''){
      const id = localStorage.getItem("userId");
      props.fetchUser(id);
    } setUserInfo({...props.user, password:''})
    
  }, [props.user]);

  

  const handleChange = event => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    });
  };


const handleEdit  = e => {
  console.log('EDIT ')
  const id = localStorage.getItem("userId");
    let updatedUser;
  if(userInfo.password.length){
    updatedUser = userInfo
  }else {
    updatedUser = {
    first_name:userInfo.first_name,
    last_name:userInfo.last_name,
    email:userInfo.email,
    occupation:userInfo.occupation,
    interests:userInfo.interests,
    
  }}
  props.updateUser(updatedUser, id);
}

 

  const handleDelete = () => {
    const id = localStorage.getItem("userId");
    props.deleteUser(id)
      .then(() => {
        
      })
  };
///////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
  return (
    <>
     
      <div>
          <h1>My Profile</h1>
        <Form onSubmit={handleEdit} >   {/* Handle Submit = EDIT PROFILE, line 49 */}
            
            <FormGroup className="registration2">
               
                <Input
                  className="registration-field2"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={userInfo.first_name}
                  onChange={handleChange}
                />       
                
                <Input
                  className="registration-field2"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={userInfo.last_name || ""}
                  onChange={handleChange}
                />     
                
                <Input
                  className="registration-field2"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={userInfo.email || ""}
                  onChange={handleChange}
                />
         
                <Input
                    className="registration-field2"
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={userInfo.password || ""}
                    onChange={handleChange}
                    />
              
                    <Input
                    className="registration-field2"
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    value={userInfo.occupation || ""}
                    onChange={handleChange}
                    />
                   
                <Input type="select" name="interests" className="registration-field2b" >
                    <option >Your Interests</option>
                    <option value="art">Art</option>
                    <option value="education">Education</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="fashion">Fashion</option>
                    <option value="foods">Foods</option>
                    <option value="game">Games or Racing</option>
                    <option value="language">Language</option>
                    <option value="literature">Literature</option>
                    <option value="Nature">Nature</option>
                    <option value="technology">Technology</option>
                    <option value="sports">Sports</option>
                    <option value="travel">Travel</option>
                    <option value="others">Others</option>
                </Input>
              
            <div className="BtnsContainer">
         
            <Button type='submit' className="updateBtn">
                Edit Profile
            </Button>
            <Button onClick={handleDelete} className="deleteBtn" >
                Delete Profile
            </Button>
            </div>

          </FormGroup>

        </Form>
        
      </div>
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    user: state.userReducer.user,
    error: state.userReducer.error,
    loading: state.userReducer.loading,
    userDeleted: state.userReducer.userDeleted
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, updateUser, deleteUser }
)(UpdateUserProfile);
