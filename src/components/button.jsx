import React, { Component } from "react";
import CreateUser from "../contextApi/user";

class Button extends Component{
    static contextType = CreateUser;
    
    render(){
        let data = this.context === "english"? "Submit" : "जमा करा";
        console.log(this.data);
        return(
            <React.Fragment>
            <button type="button" class="btn btn-outline-primary">{data}</button>
        </React.Fragment>
        )
       
    }
}
export default Button;