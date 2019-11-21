import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

import { fetchUser, editJob, deleteJob, addJob  } from "../actions/jobActions";

export default function JobCard(props) {

  const [jobInfo, setJobInfo] = useState({
    img_url:"",
    title: "",
    salary: "",
    description: "",
    // user_id: 

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

///////
       const handleEdit  = e => {
        console.log('EDIT ')
        // const id = localStorage.getItem("userId");
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
        // const id = localStorage.getItem("userId");
        props.deleteJob(id)
          .then(() => {
            //props.history.push('/signin')
          })
      };


  return (


    


      <Card className = "charater-card" style = {{margin: ' 30px 30px', marginLeft:'70px', width: '25%', textAlign: 'center', boxShadow: '5px 5px 10px #333', padding: '15px 6px', display:"inline-block"}}>
            <CardImg top width = "70%" src ={
                selectedJob.img_url} alt ="dream job" style = {{marginBottom: '20px', marginTop: '20px'}}/>
            {/* {gsap.from(".character-card", {x: -100, stager: 0.2, duration: 0.8})} */}
            <CardBody >
              <CardTitle> Job Title: {selectedJob.title}</CardTitle>
              <CardText>Job Description: {selectedJob.description}</CardText>
              
              {/* <CardText>Job Description: {selectedJob.status}</CardText> */}
              <CardText>Salary: {selectedJob.salary}</CardText>
            </CardBody>
            <Button color="primary" className="btn-small" onClick ={handleEdit} >Edit</Button>{' '}
            <Button color="primary" className="btn-small" onClick={handleClick}>Delete</Button>{' '}
      </Card>

      
 
    
      

  )
  
  
}
