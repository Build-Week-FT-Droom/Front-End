import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import Addjobform from './Addjobform';
import {deleteJob, editJob} from "../actions/CompanyActions";
import { connect } from "react-redux";

export default function CompanyJobForm () {

   


          


      return(
      <div>
        <Addjobform />
       
      </div>
    )
  }



  