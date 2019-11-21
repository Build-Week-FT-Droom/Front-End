import React,{useState} from "react";

import JobCard from "./JobCard";
import {Link} from 'react-router-dom';
import SearchForm from "../forms/SearchForm";






export default function JobList(props) {
  
  const {searchResults,search} = props;
  
  

// TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
   
   
  

  return (
    <section className="character-list">
        <h2>List of Dream Jobs</h2>
        <div className = "searchForm">
          <SearchForm search={search} jobs = {searchResults}/>
         
        </div>

        { searchResults.length === 0 ? <p style ={{textAlign: 'center'}}>No name found in this search</p> : null}
      <div className="wrapper">
      
        

            {     
             
                searchResults.map( each => 
                {console.log(each);
                return(
                <Link to = {`/jobcard/${each.id}`}>

                 <JobCard key={each.id} job = {each} searchResults={searchResults} cat="noMatch" />
                </Link>)
                }
                )

              
            

            }

          
        
        
      </div>
    
    </section>
  );
}
