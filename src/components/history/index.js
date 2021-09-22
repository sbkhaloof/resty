function History(props){
    const handleResult= async(item)=>{
        const obj={
          method:item.obj.method,
          url: item.obj.url,
          reqBody:item.obj.reqBody
        }
       await props.handleApiCall(obj)
    }
    return (
    <>
    <h1>history</h1>
    { props.history.map((item, index) => {
      console.log(item);
      return (
        <div key={index}>
          <p>
            the method: {item.obj.method} , url :{item.obj.url}
          </p>
             <button onClick={()=>{handleResult(item)}} key={index}>get result</button>
        </div>
      );
    })
    }
   
    </>
    )
  }
  
export default History;