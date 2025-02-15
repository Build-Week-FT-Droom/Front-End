import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import { registerUser } from "../actions/userActions";

function MyRegistForm(props) {
  // console.log("props", props);
  const { values, errors, touched, status } = props;
  const [members, setMembers] = useState([]);

  useEffect(() => {
    console.log("status", status);
    status && setMembers([...members, status]);
  }, [status]);
  // console.log("members", members);

  let signupMessage = "";

  if (members.length !== 0) {
    signupMessage = <p> You are signed up as {members[0].email}</p>;
  } else signupMessage = <p>Please sign up</p>;

  return (
    <div>
      <div className="registration-heading">
        <h1>Welcome to Registration on DROOM</h1>
      </div>
      <div className="registration-container">
        <Form className="registration">
          <div className="name">
            <div className="eachname">
              <Field
                type="text"
                name="first_name"
                placeholder="First Name"
                className="registration-field"
              />
              {touched.first_name && errors.first_name && (
                <p className="errors">{errors.first_name}</p>
              )}
            </div>
            <div classNmae="eachname">
              <Field
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="registration-field"
              />
              {touched.last_name && errors.last_name && (
                <p className="errors">{errors.last_name}</p>
              )}
            </div>
          </div>

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="registration-field"
          />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}

          <Field
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            className="registration-field"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          <Field
            type="password"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            value={values.passwordConfirmation}
            className="registration-field"
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <p className="errors">{errors.passwordConfirmation}</p>
          )}

          <Field
            type="text"
            name="occupation"
            placeholder="Your occupation"
            className="registration-field"
          />
          {touched.occupation && errors.occupation && (
            <p className="errors">{errors.occupation}</p>
          )}
          <Field
            as="select"
            name="interests"
            className="registration-field options"
            style={{ height: "40px" }}
          >
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
          {/* <div className="checkbox-container">
            <label
              htmlFor="employer"
              className="registration-field checkbox-container"
              style={{ marginBottom: "20px" }}
            >
              Are you an employer?
            </label>
            <Field
              id="employer"
              type="checkbox"
              name="employer"
              checked={values.employer}
              style={{
                fontSize: "20px",
                marginLeft: "30px",
                marginBottom: "40px",
                paddingBottom: "10px"
              }}
            /> 

          
          </div> */}

          <Button
            color="primary"
            style={{ marginTop: "30px" }}
            type="submit"
            className="sub-button"
          >
            Submit!
          </Button>
        </Form>
      </div>
      {<div className="message">{signupMessage}</div>}
    </div>
  );
}

const FormikRegistForm = withFormik({
  mapPropsToValues: ({
    first_name,
    last_name,
    email,
    password,
    passwordConfirmation,
    occupation,
    interests,
    employer
  }) => {
    return {
      first_name: first_name || "",
      last_name: last_name || "",
      email: email || "",
      password: password || "",
      passwordConfirmation: passwordConfirmation || "",
      occupation: occupation || "",
      interests: interests || "",
      employer: employer || false
    };
  },

  validationSchema: Yup.object().shape({
    first_name: Yup.string().required("please enter your first name"),
    last_name: Yup.string().required("please enter your last name"),

    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    passwordConfirmation: Yup.string()
      .required("Password confirmation is required!")
      .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.password === value;
      }),
    occupation: Yup.string().required("please enter your current occupation")
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    delete values.employer
    delete values.passwordConfirmation
    console.log(values)
    axios
      .post("https://droombw.herokuapp.com/api/auth/register", values)
      .then(res => {
        console.log("signup data", res);
        const resdata = JSON.parse(res.config.data);
        console.log('stringfy', resdata);
        props.history.push('/signin') //<----throws formik ERROR, but works with '/'
        setStatus(resdata);

        resetForm();
      })
      .catch(err => alert("error was returned", err));
  }
})(MyRegistForm);

export default FormikRegistForm;
