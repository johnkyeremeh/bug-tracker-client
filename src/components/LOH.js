import { Component } from "react";
import NavigationContainer from "../containers/NavigationContainer";
import MainComponent from "./MainComponent";
import React from "react";
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
