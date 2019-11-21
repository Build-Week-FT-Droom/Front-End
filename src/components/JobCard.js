import React, {useState} from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Form, Input, FormGroup
} from 'reactstrap';

 import { fetchUser, updateJob, deleteJob, addJob  } from "../actions/jobActions";

export default function JobCard(props) {

  const [jobInfo, setJobInfo] = useState({
    img_url:"",
    title: "",
    salary: "",
    description: "",
    user_id: ''

  });


console.log('myprops',props);
 const {job, searchResults,cat, match} = props;
    let selectedJob;

    
    
    console.log('searchResults', searchResults);
    console.log('job', job);
    if (cat === "yesMatch") {
    selectedJob = searchResults.find( item => 
        item.id === Number(match.params.id)
       
    )
} else selectedJob = job;
   console.log('matchSelectjob', selectedJob)


   const handleClick= ( e => {
     e.stopPropagation();
    
       })

///////////////////////////////////////

       const handleEdit  = e => {
        console.log('EDIT ')
        const id = localStorage.getItem("userId");
        const updatedJob = jobInfo
          { updatedJob = {
            img_url: jobInfo.img_url,
            title: jobInfo.title,
            salary: jobInfo.salary,
            description: jobInfo.description 
        }}
        props.updateJob(updatedJob, id);
      }

      const handleDelete = () => {
        const id = localStorage.getItem("userId");
        props.deleteJob(id)
          .then(() => {
            console.log('delete')
          })
      };



      const handleChange = event => {
        setJobInfo({
          ...jobInfo,
          [event.target.name]: event.target.value
        });
      };
/////////////////////////////////////////////////////////////

  return (
<>
{/* <Card className = "charater-card" style = {{margin: ' 30px 30px', marginLeft:'70px', width: '25%', textAlign: 'center', boxShadow: '5px 5px 10px #333', padding: '15px 6px', display:"inline-block"}}>
    <CardImg top width = "70%" src ={selectedJob.img_url} alt ="dream job" style = {{marginBottom: '20px', marginTop: '20px'}}/>
        <CardBody >

        <Input
      className="registration-field2"
      type="text"
      name="title"
      placeholder="Title"
      value={jobInfo.title}
      onChange={handleChange}
    />   

    <Input
      className="registration-field2"
      type="text"
      name="title"
      placeholder="Title"
      value={jobInfo.title}
      onChange={handleChange}
    />   

    <Input
      className="registration-field2"
      type="textarea"
      name="description"
      placeholder="Description"
      value={jobInfo.description}
      onChange={handleChange}
    />   
        </CardBody>

        <Button color="primary" className="btn-small" onClick={handleEdit} >Edit</Button>
        <Button color="primary" className="btn-small" onClick={handleDelete}>Delete</Button>

</Card> */}
    
     
<Card className = "charater-card" style = {{margin: ' 30px 30px', marginLeft:'70px', width: '25%', textAlign: 'center', boxShadow: '5px 5px 10px #333', padding: '15px 6px', display:"inline-block"}}>
            <CardImg top width = "70%" src ={
                selectedJob.img_url} alt ="dream job" style = {{marginBottom: '20px', marginTop: '20px'}}/>
            
            <CardBody >
              <CardTitle> Job Title: {selectedJob.title}</CardTitle>
              <CardText>Job Description: {selectedJob.description}</CardText>
              
              <CardText>Job Description: {selectedJob.status}</CardText>
              <CardText>Salary: {selectedJob.salary}</CardText>
            </CardBody>
            <Button color="primary" className="btn-small" onClick ={handleClick} >Edit</Button>{' '}
            <Button color="primary" className="btn-small" onClick={handleClick}>Delete</Button>{' '}
      </Card> 
      </>  
  )
 
}

{/* <div>
<img src={jobInfo.img_url}/>

<Form onSubmit={handleEdit} >  
            
<FormGroup className="registration2">
salary
    <Input
      className="registration-field2"
      type="text"
      name="title"
      placeholder="Title"
      value={jobInfo.title}
      onChange={handleChange}
    />   

    <Input
      className="registration-field2"
      type="text"
      name="title"
      placeholder="Title"
      value={jobInfo.title}
      onChange={handleChange}
    />   

    <Input
      className="registration-field2"
      type="textarea"
      name="description"
      placeholder="Description"
      value={jobInfo.description}
      onChange={handleChange}
    />   

    </FormGroup>  
</Form>

      <div className="BtnsContainer">
         
         <Button type='submit' className="updateBtn">
             Edit Profile
         </Button>
         <Button onClick={handleDelete} className="deleteBtn" >
             Delete Profile
         </Button>
         </div>

</div> */}