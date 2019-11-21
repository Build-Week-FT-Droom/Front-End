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
    employer:""
  });

  
  useEffect(() => {
    props.fetchUser(props.match.params.id);
  }, []);

  useEffect(() => {
    if (props.user) {
      setUserInfo(props.user);
    }
  }, [props.user]);

  useEffect(() => {
    if (props.userDeleted) {
      props.history.push("/signup");
    }
  }, [props.userDeleted]);

  const handleChange = event => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    });
  };
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
  const handleSubmit = event => {
    event.preventDefault();
    props.updateUser(userInfo);
    props.history.push(`/userprofile/${props.match.params.id}`);
  };

  const handleDelete = () => {
    props.deleteUser(props.match.params.id);
  };
///////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
  return (
    <>
     
      <div >
          <h1>My Profile</h1>
        <Form onSubmit={handleSubmit} className="registration">
          <Row form>
            
            <FormGroup>
               
                <Input
                  className="registration-field2"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={userInfo.first_name}
                  onChange={handleChange}
                />
            </FormGroup>
         
            <FormGroup>
                
                <Input
                  className="registration-field2"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={userInfo.last_name || ""}
                  onChange={handleChange}
                />
            </FormGroup>
          </Row>
          <Row form>
            <FormGroup>
                
                <Input
                  className="registration-field2"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={userInfo.email || ""}
                  onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
           
                <Input
                    className="registration-field2"
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={userInfo.password || ""}
                    onChange={handleChange}
                    />
                </FormGroup>
          </Row>
          <Row form>
                <FormGroup>
             
                    <Input
                    className="registration-field2"
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                    value={userInfo.occupation || ""}
                    onChange={handleChange}
                    />
                </FormGroup>

                <Input type="select" name="interests" className="registration-field2b" style={{height: '40px'}}>
                    <option >Your area of interests</option>
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
   
          </Row>
         
          <FormGroup>
            <Button className="updateBtn">
                Update Profile
            </Button>
            <Button onClick={handleDelete} className="deleteBtn" >
                Delete Profile
            </Button>
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
