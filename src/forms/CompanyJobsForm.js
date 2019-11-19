import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
//import {f}


const addCompanyJob = props => {
    const [credentials,setCredentials] = useState({
        title: '',
        salary: '',
        description:''
    });



    const handleSubmit = e => {

    }
      
    
  
    const handleChange = e => {
        setCredentials({
            [e.target.name]: e.target.value
        }); 
        };
     
   

    // add = e => {
    //   e.preventDefault();
    //   axiosWithAuth()
    //     .post('/api/friends', this.state.credentials)
    //     .then(res => {
    //       localStorage.setItem('token', res.data.payload);
    //       // redirect to the apps main page?
    //       props.history.push('/protected');
    //     })
    //     .catch(err => console.log(err));
    // };

    return (
      
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Company"
            name="title"
            value={credentials.title}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Add Yearly Salary"
            name="salary"
            value={credentials.salary}
            onChange={handleChange}
          />  

          <input
            type="textarea"
            placeholder="Add description"
            name="description"
            value={credentials.description}
            onChange={handleChange}
          />
        
          <button>Add Job</button>
          <button>Edit Job</button>
          <button>Delete Job</button>

        </form>

       
      </div>
    );
  }


export default addCompanyJob;