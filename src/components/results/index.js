import React from 'react';
import ReactJson from "react-json-view";
import Loading from "../loading/index"

import "./result.scss"

function Results(props){
 
    return (
      <div className="result-container">
      <pre className="result">
      {props.data ? JSON.stringify(props.data, undefined, 2) :<Loading />}
      </pre>
      </div>
    );
  }
export default Results;
