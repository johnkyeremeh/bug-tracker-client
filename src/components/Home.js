import { Component } from "react";
import NavigationContainer from "../containers/NavigationContainer";
import BugsContainer from "../containers/BugsContainer";

export default class Home extends Component{

    render(){
        return( 
            <div>
                < NavigationContainer/>
                < BugsContainer />
            </div>
        )
    }
}
