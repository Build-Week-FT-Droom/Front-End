import React, { useState, useEffect } from "react";
import axios from "axios";
import {Formik, Form, Field, withFormik} from "formik";
import {loginUser} from '../actions/userActions';
function Signin(props) {

   const {status} = props;
  const [user, setUser] = useState([]);

  useEffect(() => {

    status && setUser([...user, status
    ])
    }, [status]);

let loginMessage = "";
console.log('user', user);
if (user.length !== 0) {
  loginMessage = <p>You are logged in with username: {user[0].email}</p>}
  


  

  return (
    <div>
      <h1>Sign In</h1>
      <Form className="registration"  style={{ marginTop: "40px" }}>
        <div className="name">
          <Field
            type="email"
            name="email"
            
            placeholder="email"
            className="registration-field"
            style={{ fontSize: "1rem", textAlign: "center" }}
            
          />
          <Field
           
            type="password"
            name="password"
            
            placeholder="password"
            className="registration-field"
            style={{ fontSize: "1rem", textAlign: "center" }}
           
          />
        </div>
        <button //onClick={loginUser} 
        className="sub-button" style={{ marginTop: '20px'}}>Submit</button>
      </Form>

      <div className= "message">
        {loginMessage}
      </div>
        
      
    </div>
  );
}

const FormikSigninForm = withFormik({
    mapPropsToValues:(values) => {
        return {
        email: values.email || "",
        password: values.password || ""
    }

    },

    handleSubmit(values, {setStatus, resetForm}) {
      console.log(values)
        axios
        //.post('https://reqres.in/api/users', values)
        .post('https://droombw.herokuapp.com/api/auth/login', values)
        .then( res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            setStatus(res.data);
            resetForm();
        })
        .catch(err => console.log('errors returned', err));
    }








},








)(Signin);

export default FormikSigninForm;