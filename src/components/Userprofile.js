import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";

import { fetchUser, updateUser, deleteUser } from "../actions/userActions";

const UpdateUserProfile = props => {
  
  const [userInfo, setUserInfo] = useState({
    first_name,
    last_name,
    email,
    password,
    occupation,
    interests,
    employer
  });

  
  useEffect(() => {
    props.fetchUser(props.match.params.id);
  }, []);

//   useEffect(() => {
//     if (props.user) {
//       setUserInfo(props.user);
//     }
//   }, [props.user]);

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

  const handleSubmit = event => {
    event.preventDefault();
    props.updateUser(userInfo);
    props.history.push(`//${props.match.params.id}`);
  };

  const handleDelete = () => {
    props.deleteUser(props.match.params.id);
  };

  return (
    <>
     
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Row form>
            
              <FormGroup>
               
                <Input
                //   id="firstName"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={userInfo.first_name}
                  onChange={handleChange}
                />
              </FormGroup>
         
            
              <FormGroup>
                
                <Input
                //   id="lastName"
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
                //   id="age"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={userInfo.email || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
           
                <Input
                  id="gender"
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={userInfo.gender || ""}
                  onChange={handleChange}
                />
              </FormGroup>
          </Row>
          <Row form>
              <FormGroup>
             
                <Input
                  id="location"
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={userInfo.location || ""}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                
                <Input
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={userInfo.description || ""}
                  onChange={handleChange}
                />
              </FormGroup>
          </Row>
          <FormGroup>
         

            <Input
              id="interests"
              type="textarea"
              name="interests"
              placeholder="Interests"
              value={userInfo.interests || []}
              onChange={handleChange}
            />
          </FormGroup>
          <Button color="success">Update Profile</Button>
          <Button onClick={handleDelete} color="danger">
            Delete Profile
          </Button>
        </Form>
        
      </div>
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    user: state.userProfileReducer.user,
    error: state.userProfileReducer.error,
    loading: state.userProfileReducer.loading,
    userDeleted: state.userProfileReducer.userDeleted
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, updateUser, deleteUser }
)(UpdateUserProfile);
