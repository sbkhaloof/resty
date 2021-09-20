// import { useState } from 'react';
// import axios from "axios"

import './form.scss';

function Form(props) {
  // declear state 
  // const [textArea, setTextArea] = useState(false);
  // const [method, setMethod] = useState("get")
  // const [URL, setURL] = useState(" ");
  // const [request, setRequest] = useState(" ");
  async function handleSubmit(e) {
    e.preventDefault();
    let method = e.target.select.value;
    let url = e.target.url.value;
    let reqBody = e.target.text.value;
    const formData = {
      method: method,
      url: url,
      reqBody: reqBody
    }
    props.handleApiCall(formData);
  };
  // const URLHandler = (e) => {
  //   setURL(e.target.value)
  // };
  // const methodHandler = (e) => {
  //   setMethod(e.target.id);
  //   setTextArea(false);
  // };
  // const textAreaHandler = (e) => {
  //   setTextArea(true);
  //   setMethod(e.target.id)
  // };
  // const requestHandler = (e) => {
  //   setRequest(E.target.value)
  // };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="methods" for='select' > select hte method you want </label>
        <select name="select" id='select'>
          <option id="get" value='get'>GET</option>
          <option id="post" value='post'>POST</option>
          <option id="put" value='put'>PUT</option>
          <option id="delete" value='delete'>DELETE</option>
        </select>


        <label >
          <span>URL: </span>
          <input name='url' type='text' id='url' />
          <button type="submit">GO!</button>
        </label>
        <textarea id="text" name="text" rows="4" cols="30">

          for test get https://pokeapi.co/api/v2/pokemon
        </textarea>
      </form>
    </>
  );
}


export default Form;
