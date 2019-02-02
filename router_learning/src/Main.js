import {Switch,Route} from 'react-router-dom'
import React, { Component } from 'react';
import App_Page_1 from "./App_Page_1";
import App_Page_2 from "./App_Page_2";

class Main extends Component{


    render(){


        return (
            <Switch>
                <Route exact path='/' component={App_Page_1}/>
                <Route exact path='/page2' component={App_Page_2}/>
            </Switch>
        );
    }
}

export default Main;
