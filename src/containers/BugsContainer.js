import { Component } from "react";
import MyBugsList from "../components/myBugs";
import { connect } from "react-redux";

class BugsContainer extends Component{

    render(){
        return(
            <div>
                 < MyBugsList myBugs={this.props.myBugs} />
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
      myBugs: state.myBugs
    }
  }
  export default connect(mapStateToProps)(BugsContainer)