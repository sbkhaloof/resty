import React from 'react';
import ReactJson from "react-json-view";
import Loading from "../loading/index"

import "./result.scss"

function Results(props){
 
    return (
      <div className="result">
        {props.data ? <ReactJson src={props.data} />:<Loading/>}
      </div>
    );
  }
export default Results;
