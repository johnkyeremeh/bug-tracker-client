import {Component} from "react"
import BugsContainer from "../containers/BugsContainer";
import NavigationContainer from "../containers/NavigationContainer";
import { getMyBugs} from "../actions/myBugs";
import { connect } from "react-redux";
import React from "react";

class myBugsView extends Component{

  componentDidMount() {
    this.props.getMyBugs()  
  }
  

    render(){
        return(
          <div>
                < NavigationContainer />
                < BugsContainer  />
          </div>
        );
      }
}

const mapStatetoProps = (state) => {
  return {
    myBugs: state.myBugs
  }
}

export default connect(mapStatetoProps, {getMyBugs})(myBugsView)