import React, { useState, useEffect } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

//-------------------lab27----------------------------------

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     console.log(requestParams);
//     let reqBody=requestParams.reqBody;
//     let method=requestParams.method;
//     let url=requestParams.url;

//       axios[method](url).then(result=>{
//         this.setState({
//           result:result.data,
//           requestParams:requestParams
//         })
//         console.log(result);
//       })
//     }


//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.result} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }
//====================================================================

//------------------------------lab28---------------------------
// refactor app component to functional  as first 
function APP(props) {
  // declear stats using useState method 
  const [data, setData] = useState("null");
  const [requestParams, setRequestParams] = useState({});
  const [body, setBody] = useState('');

  const [loading, setLoading] = useState(false);//for loading component

  // use effect method 
  useEffect(() => {
    async function getFormData(){
      /**
       
 check on the request data from the form
 and updates the request variable in state with
 the url, method, and potentially the body

       */
      if(requestParams.url){
        // runs the API request with the new request options from state
        const res=await axios (
          {
            method:requestParams.method,
            url:requestParams.url,
            data:body,
          }
        )
        setData(res);
      }
    }
    getFormData();
    //has an effect hook that’s looking for changes to the request variable in state
  },[requestParams])

  // call api function

  async function callApi(data) {
      if (data.url !== "") {
      setRequestParams(data);
      setBody(data.request)
    } else {
       // mock output
      const response = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setData({ response });
      setRequestParams(data);
    }
}

return(
  <>
  <Header />
  <div>
    <span>Request Method :</span>{requestParams.method}
    <br />
    <br />  
    <span>URL:</span>{requestParams.url}
  </div>
  <Form handleCallApi={callApi}/>
  <Results data={data}/>
  <Footer />
  </>
)
}
export default APP;