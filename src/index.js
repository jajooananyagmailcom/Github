import React from "react";
import ReactDOM from "react-dom";

import { Greeting } from "./greeting.js";
class Body extends React.Component{
  getName() {
    var name;
   // name = prompt("Enter your names", "");
    
    return name;
  }
render(){
  return(
    <div>
    <Greeting name={this.getName()} />
    </div>
  );
}

}
ReactDOM.render(<Body/>, document.getElementById('root'));
