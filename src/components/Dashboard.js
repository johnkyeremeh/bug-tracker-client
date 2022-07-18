import {Component} from "react"
import BugsContainer from "../containers/BugsContainer";
import NavigationContainer from "../containers/NavigationContainer";
import { getMyBugs} from "../actions/myBugs";
import { connect } from "react-redux";


class Dashboard extends Component{

 

    render(){
        return(
          <div>
                < NavigationContainer />
              
          </div>
        );
      }
}

const mapStatetoProps = (state) => {
  return {
    myBugs: state.myBugs
  }
}

export default connect(mapStatetoProps, {getMyBugs})(Dashboard)