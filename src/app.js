import React,{useState,useEffect,useReducer} from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from "./components/history";

import axios from 'axios';


const initialState={
  history:[]
}
function historyReducer(state,action){
  const {type,payload}=action;
  switch(action.type){
    case "ADD_HISTORY":
    const history=[...state.history,payload];
    return {history}
    default:
      return state;
  }
}
function addAction(obj){
  return{
    type:"ADD_HISTORY",
    payload:{ obj }
  }
}

function App(props){
  const [requestParams, setRequestParams] = useState({});
  const [result, setResult] = useState(null);
  const [render, setRender] = useState("");
  const [state, dispatch] = useReducer(historyReducer, initialState);

  
  const callApi = (requestParams) => {
    // mock output
    console.log(requestParams);
    let reqBody = requestParams.reqBody;
    let method = requestParams.method;
    let url = requestParams.url;
    if (method == "post" || method == "put") {
      axios[method](url, reqBody).then((results) => {
        setResult(results.data);
        setRequestParams({ ...requestParams, requestParams });
      });
      dispatch(
        addAction({
          method: method,
          url: url,
          reqBody: reqBody,
        })
      );
    } else {
      axios[method](url).then((results) => {
        setResult(results.data);
        setRequestParams({ ...requestParams, requestParams });
      });
      dispatch(
        addAction({
          method: method,
          url: url,
        })
      );
    }
  };

  useEffect(() => {
    setRender(`method : ${requestParams.method}   ,  URL : ${requestParams.url}`);
  });


     return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <div>i run from useEffect : {render}</div>
      <History history={state.history} handleApiCall={callApi} />
      <Form handleApiCall={callApi} />
      <Results data={result} />
      <Footer />
    </React.Fragment>
  );
  }


export default App;
