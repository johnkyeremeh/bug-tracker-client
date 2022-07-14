import { Component } from "react";

class BugView extends Component{

 
    render(){

        console.log(this.props)
        return(
            <div> 
               <button></button>
               Bug: id {this.props.bug.id}
               Bug: Title: {this.props.bug.attributes.title}
               Bug: Title: {this.props.bug.attributes.descrption}
               Bug: Title: {this.props.bug.attributes.status}
               Bug: Title: {this.props.bug.attributes.title}
            </div>    
        )
    }
}


  export default BugView