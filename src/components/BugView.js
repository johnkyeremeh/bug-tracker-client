import { Component } from "react";
import { updateBug, markComplete, deleteBug, getBug } from "../actions/myBugs";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

class BugView extends Component{

    componentDidMount() {                                   
        this.props.getBug(this.props.match.params.id);
    }

 
    render(){
        const bug = this.props.bug;
       
        return(
            <div> 
                {this.props.bug ? <><Link to={{ pathname: `/bugs/${bug.id}/edit`, state: { bug: bug } }} className='btn btn-info'>Edit Bug</Link> <button className="btn btn-danger" type="button" onClick={() => this.props.deleteBug(bug.id)}>Delete</button>
                </> : "TST"}
            </div>    
        )
    }
}


const mapStateToProps = (state) => {
    return { 
        bug: state.bug 
    }
}           

export default connect(mapStateToProps, {getBug} )(BugView); 