import { Component } from "react";
import NavigationContainer from "../containers/NavigationContainer";
import MainComponent from "./MainComponent";
// import Container from 'react-bootstrap/Container';
export default class LOH extends Component{

  

    render(){
        return(
        <div>
           <NavigationContainer/>
           <MainComponent />
        </div>
        )
    }
}
