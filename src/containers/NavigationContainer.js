import {Component} from "react"
import Navigation from "../components/Navigation"
import {connect} from "react-redux"



class NavagitationContainer extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
        <div>
            <Navigation dispatch={this.props.dispatch}currentUser={this.props.currentUser}  />
        </div>)
    }
}


const mapStatetoProps = (state) => {
    return {
      currentUser: state.currentUser
    }
  }
  

  


export default connect(mapStatetoProps)(NavagitationContainer);
