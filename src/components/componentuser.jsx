import React from "react";
import Field from "./field";
import Button from "./button";

const ComponentUser = (props)=>{
    console.log(props);
    return(
        <React.Fragment>
        <Field/>
        <Button/>
    </React.Fragment>
    );
   
}
export default ComponentUser;