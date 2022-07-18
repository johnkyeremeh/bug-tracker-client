import { Component } from "react";
import MyBugsList from "../components/myBugs";
import { connect } from "react-redux";
import { setDisplayedBug, displayBug } from "../actions/cells";
import BugView from "../components/BugView";
import Button from 'react-bootstrap/Button';


class BugsContainer extends Component{
    
  
    handleClick = (bug) => {

        console.log("bug item clicked", bug)
        debugger
        this.props.setDisplayedBug(bug)
    }

    render(){
        return(
            <div>
                <div className="text-center">
                    <Button href="/bugs/new" className="float-right">New Ticket</Button>
                </div>
                {< MyBugsList myBugs={this.props.myBugs} handleClick={this.handleClick} />}
                {/* {this.props.currentViewedBug.isDisplayed ? <BugView bug={this.props.currentViewedBug.bug}/> : "No Bug View"}
                 "Bug is displayed", {this.props.currentViewedBug.id} :  {this.props.currentViewedBug.isDisplayed.toString()} */}
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
      myBugs: state.myBugs,
      currentViewedBug: state.currentViewedBug
    }
  }
  export default connect(mapStateToProps, {setDisplayedBug, displayBug})(BugsContainer)