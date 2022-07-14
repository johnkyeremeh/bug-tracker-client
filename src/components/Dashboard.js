import {Component} from "react"
import BugsContainer from "../containers/BugsContainer";
import NavigationContainer from "../containers/NavigationContainer";
import { getMyBugs, setMyBugs } from "../actions/myBugs";
import { connect } from "react-redux";


class Dashboard extends Component{

  componentDidMount() {
    console.log("getting")
    this.props.getMyBugs()  
  }
  
  componentDidUpdate(prevProps){
    console.log("Bugs are updating...")

    if (prevProps.myBugs.length  !== this.props.myBugs.length){

      this.props.getMyBugs()    
    }
  }

    render(){
        return(
          <div>
                < NavigationContainer />
                < BugsContainer  mybugs={this.props.bugs} />
          </div>
        );
      }
}

const mapStatetoProps = (state) => {
  return {
    myBugs: state.myBugs
  }
}

export default connect(mapStatetoProps, {getMyBugs, setMyBugs})(Dashboard)