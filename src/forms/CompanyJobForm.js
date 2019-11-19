import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {deleteJob, editJob} from "../actions/CompanyActions";


const addCompanyJob = props => {
    const [credentials,setCredentials] = useState({
        title: '',
        salary: '',
        description:''
    });

/////????????????????
    const handleSubmit = event => {
      event.preventDefault();
      props.editJob(userInfo);
      //props.history.push(`/users/${props.match.params.id}`);
    };
      


    
    const handleDeleteJob = () => {
      props.deletejob(props.match.params.id);
    };
  
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
        
          <button>Add Job</button>
          <button onCLick={}>Edit Job</button>
          <button onClick={handleDeleteJob} >Delete Job</button>

        </form>

       
      </div>
    );
  }



  const mapStateToProps = state => {
    // console.log(state);
    return {
      
      userDeleted: state.userProfileReducer.userDeleted
    };
  };

  export default connect(
    mapStateToProps,
    {deleteJob, editJob}
  )(addCompanyJob);