import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';



const addCompany = props => {
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
        
          <button>Add Company</button>
          <button>Edit Company</button>

        </form>

       
      </div>
    );
  }


export default addCompany;