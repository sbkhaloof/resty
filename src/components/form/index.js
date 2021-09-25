 import { useState } from 'react';
// import axios from "axios"

import './form.scss';

function Form(props) {
  // declear state for user  entries
  const [url,setUrl]=useState("");
  const [request,setRequest]=useState("");
  const [method,setMethod]=useState("get");
  // this state will be true  when using put ,post method
  const[textArea,setTextArea]=useState(false);

  const handleSubmit=async(e)=> {
    e.preventDefault();
    try{
      const data={
        method:method,
        url:url,
        request:request,
      }
      // sends the user’s entries to
      // the <App /> via method sent in through props
await props.handleCallApi(data);
    }catch(error){
      console.log(error.message);
    }
  };
  // update the states url,method ,request and textArea
  const handleURL=(e)=>{
    setUrl(e.target.value)
  }
  const handleRequest=(e)=>{
    let data=JSON.parse(e.target.value);
    setRequest(data);
  }
  const handleGet=(e)=>{
    setMethod("get");
    setTextArea(false);
  }
  const handlePost=(e)=>{
    setMethod("post");
    setTextArea(true);
  }
  const handlePut=(e)=>{
    setMethod("put");
    setTextArea(true);
  }
  const handleDelete=(e)=>{
    setMethod("delete");
    setTextArea(false);
  }
 


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handleURL} />
          <button type="submit" data-testid="submit">
            GO!
          </button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleGet}>
            GET
          </span>
          <span id="post" onClick={handlePost}>
            POST
          </span>
          <span id="put" onClick={handlePut}>
            PUT
          </span>
          <span id="delete" onClick={handleDelete}>
            DELETE
          </span>
        </label>
        {textArea && (
          <textarea rows="15" cols="35" onChange={handleRequest}></textarea>
        )}
      </form>
    </>
  );
}


export default Form;
