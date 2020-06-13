import React, { Component } from "react";
import CreateUser from "./contextApi/user";
import ComponentUser from "./components/componentuser";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            changeValue:""
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" className="btn btn-outline-primary"style={{margin:"25px"}}
                            onClick={()=>this.setState({changeValue:"english"})}>ENGLISH</button>
                            <button type="button" className="btn btn-outline-primary"
                            onClick={()=>this.setState({changeValue:"marathi"})}>MARATHI</button>
                        </div>
                    </div>
                    <CreateUser.Provider value={this.state.changeValue}>
                        <ComponentUser/>
                    </CreateUser.Provider>
                </div>
            </React.Fragment>
        )
    }
}
export default App;