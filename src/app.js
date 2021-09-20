import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    // mock output
    console.log(requestParams);
    let reqBody=requestParams.reqBody;
    let method=requestParams.method;
    let url=requestParams.url;
    // if(method=='post'||'put'){
    //   axios[method](url,reqBody).then(result=>{
    //     this.setState({
    //       result:result.data,
    //       requestParams:requestParams
    //     })
    //   })
    // }else{
      axios[method](url).then(result=>{
        this.setState({
          result:result.data,
          requestParams:requestParams
        })
        console.log(result);
      })
    }
  //   const data = {
  //     count: 2,
  //     results: [
  //       {name: 'fake thing 1', url: 'http://fakethings.com/1'},
  //       {name: 'fake thing 2', url: 'http://fakethings.com/2'},
  //     ],
  //   };
  //   this.setState({data, requestParams});
  // }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.result} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
