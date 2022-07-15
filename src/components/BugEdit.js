import { Component } from "react";
import { connect } from "react-redux";
import { getBug, updateBug } from "../actions/myBugs";

class BugEdit extends Component{

    // componentDidMount() {                                   
    //     this.props.getBug(this.props.match.params.id);
    // }

 
    render(){
        
        return(
            <div> 
               Edit View 
            </div>    
        )
    }
}


// const mapStateToProps = (state) => {
//     return { 
//         bug: state.bug 
//     }
// }     

export default connect(null, {getBug} )(BugEdit); 