import React, { Component } from "react";
import CreateUser from "../contextApi/user"
class Field extends Component{
    static contextType = CreateUser;
    
    render(){
        let data = this.context === "english"? "Username" : "वापरकर्तानाव";
        return(
<React.Fragment>
        <label htmlFor="username">{data}:</label>
            <div className="form-group">
                <input type="text" className="form-control" placeholder={data}/>
            </div>
        </React.Fragment>
        )
        
    }
}
export default Field;