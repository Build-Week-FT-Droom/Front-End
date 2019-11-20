import React from 'react';
import { Button } from "reactstrap";
import JobList from './Joblist';
import {Route, Link} from 'react-router-dom';

export default function Welcome() {

 

    return(
        <div className="welcome">
            <div className="welcome2">
                <h1>Welcome to Droom</h1>
                <h2>Search for your dream jobs</h2>
                
            </div>
                <img src="https://images.unsplash.com/photo-1525876183281-0d0d9308010d?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=525&q=60" alt="droom"></img>

        </div>

    )
}