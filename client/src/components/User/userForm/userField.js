//Formのテキスト部品

import React from "react";
import TextField from '@material-ui/core/TextField';

//テキスト部分を担当する部品
export default({input,label,type,meta:{error,touched}})=>{
    return(
        <div>
            <TextField  {...input} type={type} label={label}/>
            <div className="red-text" style={{ color: "#ff0000",marginBottom: "10px" }}>
                 {touched && error}
           </div>
        </div>
    )
}