import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import {registerUser} from '../actions/userActions';

function Addjobform(props) {
  // console.log("props", props);
  const { values, errors, touched, status} = props;
  const [job, setJob] = useState([]);

  useEffect(() => {
    
    status && setJob([...job, status]);
  }, [status]);
  

  return (
    <div>
      <div className="registration-heading">
        <h1>Job Posting Form</h1>
      </div>
      <div className="registration-container">
        <Form className="registration">
       
        
              <Field
                type="text"
                name="img_url"
                placeholder="Please type your image url "
                className="registration-field"
              />
              {touched.img_url && errors.img_url && (
                <p className="errors">{errors.img_url}</p>
              )}
         
        
              <Field
                type="text"
                name="title"
                placeholder="Job title"
                className="registration-field"
                
              />
              {touched.title && errors.title && (
                <p className="errors">{errors.title}</p>
              )}
       
          
          <Field
            as="textarea"
            name="description"
            placeholder="Job description"
            className="registration-field"
            style = {{height: "100px"}}
          />
          {touched.description && errors.description && (
            <p className="errors">{errors.description}</p>
          )}

          <Field
            type="text"
            name="salary"
            placeholder="Salary"
            
            className="registration-field"
          />
          {touched.salary && errors.salary && (
            <p className="errors">{errors.salary}</p>
          )}
          

          <Button type="submit" className="sub-button" style={{marginTop: "30px"}}>
            Submit!
          </Button>
        
        </Form>
      </div>

      {job.map(member => (
        <div key={member.user_id} className ="message" >
            <p>- You posted a job as below -</p>
          <p>image: {member.img_url}</p>
          <p>Job title: {member.title}</p>
          <p>Job description: {member.description}</p>
          <p>Salary: {member.salary}</p>
          
        </div>
      ))}
    </div>
  );
}

const FormikAddjobForm = withFormik({
  mapPropsToValues: ({
    img_url,
    title,
    description,
    salary
    
  }) => {
    return {
      img_url: img_url || "",
      title: title || "",
      description: description || "",
      salary: salary|| ""
      
  }},

  validationSchema: Yup.object().shape({
    img_url: Yup.string(),
    title: Yup.string().required("please enter the job title"),

    description: Yup.string()
      .required("please enter the job description"),

  
    salary: Yup.string().required("please enter the approx. salary for the job")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    
    console.log(values)
    axios
      .post("https://droombw.herokuapp.com/api/jobs", values)
      .then(res => {
        console.log("data for addform", res);
        setStatus(res.data);
    
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Addjobform);

export default FormikAddjobForm;
