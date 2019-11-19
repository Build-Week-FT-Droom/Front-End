import React, { useState, useEffect } from "react";
import axios from "axios";
import {Formik, Form, Field, withFormik} from "formik";

function Signin(props) {

   const {status} = props;
  const [user, setUser] = useState({});

  useEffect( () => {
    status && setUser({...user, status});

  },[status, user]);


  

  return (
    <div>
      <h1>Sign In</h1>
      <Form className="registration"  style={{ marginTop: "40px" }}>
        <div className="name">
          <Field
            type="email"
            name="email"
            
            placeholder="email"
            class="registration-field"
            style={{ fontSize: "1rem", textAlign: "center" }}
            
          />
          <Field
            className="name"
            type="password"
            name="password"
            
            placeholder="password"
            class="registration-field"
            style={{ fontSize: "1rem", textAlign: "center" }}
           
          />
        </div>
        <button className="sub-button" style={{ marginTop: '20px'}}>Submit</button>
      </Form>

      
    </div>
  );
}

const FormikSigninForm = withFormik({
    mapPropsToValues({
       email,
       password
    }) {
        return {
        email: email || "",
        password: password || ""
    }

    },

    handleSubmit(values, {setStatus, setReset}) {
        axios.post('https://reqres.in/api/users', values)
        .then( res => {
            console.log(res.data);
            setStatus(res.data);
            setReset();
        })
        .catch(err => console.log('errors returned', err));
    }








},








)(Signin);

export default FormikSigninForm;