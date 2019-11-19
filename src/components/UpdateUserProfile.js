import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Field } from "formik";
import { fetchUser, updateUser, deleteUser } from "../actions/index";

const UpdateUserProfile = props => {
    // console.log('update user profile props', props);
    const [userInfo, setUserInfo] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      occupuation: "",
      //past_experience: "",
      interests: ""
    });



    
const handleChange = event => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    });
  };


  const handleDelete = () => {
    props.deleteUser(props.match.params.id);
  };

  return (
    <div>
      <div className="registration-heading">
        <h1>Edit Profile</h1>
      </div>
      <div className="registration-container">
        <Form onSubmit={handleSubmit} className="registration">
          <div className="name">
            <div className="eachname">
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleChange}
                className="registration-field"
              />
              
            </div>
            <div className="eachname">
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={handleChange}
                className="registration-field"
              />
             
            </div>
          </div>

          <Field
            type="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
            className="registration-field"
          />
        
          <Field
            type="password"
            name="password"
            placeholder="Password"
            value={userInfo.password}
            onChange={handleChange}
            className="registration-field"
          />
         
          {/* <Field
            type="password"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            value={values.passwordConfimation}
            className="registration-field"
          /> */}
          
          <Field
            type="text"
            name="occupation"
            placeholder="Your occupation"
            value={userinfo.occupation}
            onChange={handleChange}
            className="registration-field"
          />
          
          <Field as="select" name="interests" className="registration-field">
            <option>Your area of interests</option>
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
          </Field>
          

          <Button type="submit" color="secondary" className="sub-button">
           Update Profile
          </Button>

          <Button onClick={handleDelete} type="submit" color="secondary" className="sub-button">
           Delete
          </Button>
         
        </Form>
      </div>

      {members.map(member => (
        <ul key={member.id}>
          <li>Name: {member.fname}</li>
          <li>Name: {member.lname}</li>
          <li>email: {member.email}</li>
          <li>Occupation: {member.occupation}</li>
        </ul>
      ))}
    </div>
  );
}


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