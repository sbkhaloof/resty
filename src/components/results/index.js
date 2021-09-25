 import React from 'react';
// import ReactJson from "react-json-view";
import Loading from "../loading/index"
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

import "./result.scss"

function Results(props){
 
    return (
      <div className="result">
      <pre>{props.data ? <JSONPretty data={props.data} />: <Loading/>}</pre>
      </div>
    );
  }
export default Results;