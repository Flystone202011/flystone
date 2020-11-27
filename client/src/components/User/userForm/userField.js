//Formのテキスト部品

import React from "react";

export default({input,label,type,valueDefault,meta:{error,touched}})=>{
    return(
        <div>
            <label>{label}</label>
            <input {...input} type={type} defaultValue={valueDefault}/>
            <div className="red-text" style={{ marginBottom: "10px" }}>
                 {touched && error}
           </div>
        </div>
    )
}