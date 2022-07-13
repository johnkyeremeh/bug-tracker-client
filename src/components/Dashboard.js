import {Component} from "react"
import BugsContainer from "../containers/BugsContainer";
import NavigationContainer from "../containers/NavigationContainer";

class Dashboard extends Component{

    render(){
        return(
          <div>
                < NavigationContainer/>
                < BugsContainer />
          </div>
        );
      }
}

export default Dashboard