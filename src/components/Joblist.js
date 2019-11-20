import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import {Route, Link} from 'react-router-dom';
import SearchForm from "../forms/SearchForm";






export default function JobList() {
  // TODO: Add useState to track data from useEffect\

  // const [characters, setCharacters]= useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const search = (newArray) => {
    setSearchResults(newArray);
  };

// TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    useEffect(() => {
      axios.get('https://droombw.herokuapp.com/api/jobs')
      .then(res => {
        
        // setCharacters(res.data.results);
        setSearchResults(res.data);
        
        console.log('resdata',res);
      })
      .catch(err => console.log(err));
    }, []);
  

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
                return(<Link to = {`/jobcard/${each.id}`}>

                 <JobCard key={each.id} job = {each} searchResults={searchResults} />
                </Link>)
                }
                )

              
            

            }

        
        
        
      </div>
    
    </section>
  );
}
