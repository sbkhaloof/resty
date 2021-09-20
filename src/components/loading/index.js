import { useState } from "react";

import ClipLoader from "react-spinners/ClipLoader"

import './loading.scss';

function Loading(){
    
    const [loading,setLoading]=useState(true);
    const[color,setColor]=useState("rgba(255, 0, 0, 0.979)");
    return (
        <div className="sweetLoading">
<ClipLoader color={color} loading={loading} size={150}/>
           </div>
    )
}
export default Loading;