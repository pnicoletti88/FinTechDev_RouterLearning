import React, { Component } from 'react';
import logo from './logo.svg';
import './App_Page_1.css';
import {Link,Route,Redirect} from 'react-router-dom'

class ButtonFun extends Component{
  constructor(props){
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(){
    alert("da button is clicked");
    this.props.history.push('/page2');
  }

  //this method does not seem to work very well, long load up time
  //better to use other method and have state get set in the function onClick calls
  render(){
    return(
        <button
            type="button"
            onClick={this.buttonClick}
        >
          I am a button
        </button>
    );
  }
}



class App_Page_1 extends Component{
  constructor(props){
    super(props);
    this.state = {redirect:null};


  }

  /*- this function shows how you can handle switching pages - can grow this if statement out for multiple pages
    - input here is from textbox, but instead in real app input will be from user validation functions or buttons etc.
   */
  userValid(e, input){
    e.preventDefault();
    if (input === "change"){
      this.setState({redirect:<Redirect to="/page2"/>})
    }

  }
  //note link is a third way to switch pages - Do not think there will be many links on site as they are ugly
  //you may be able to build this into other components I am not sure - worth a look
  render() {
    return (

      <div className="App">
        {this.state.redirect}
        <header className="App-header">
          <Route path="/" render={(props) => <ButtonFun {...props} />} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Page One!
            <br/><br/>
            <Link to='/page2'>Click Me For Page 2</Link>
          </p>
          <form onSubmit={(e, input = document.getElementById("Box").value) => { this.userValid(e, input) }}>
            <label>
              Change (enter 'change' to switch windows):
              <input type="text" name="Box" id="Box" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App_Page_1;
