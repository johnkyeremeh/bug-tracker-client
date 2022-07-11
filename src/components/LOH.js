import { Component } from "react";
import NavigationContainer from "../containers/NavigationContainer";
import MainComponent from "./MainComponent";

export default class LOH extends Component{

  

    render(){
        return(
        <>
           <NavigationContainer/>
           <MainComponent />
        </>
        )
    }
}
