import React, {Component} from 'react';

/*
const App = (props) => {
    return (
        <h1>{props.greet}</h1>
    );
}
*/
class App extends Component{
    constructor(){
        super();
        this.state = {
            text: "Wednesday",
            hasLoaded: false
        }
   
    }
    handleInputChange = (value) =>{
        this.setState({ response: value
                      });
    };
    handleBtnEvent = (e) =>{
        this.setState({ hasLoaded: true  });
    };
    componentDidMount = () => {
        this.setState({ hasLoaded: true  });
    };
    newStateTextValue = () =>{
        this.state.text = this.props.day;
    };
 
    
render(){
    this.newStateTextValue();
    this.state.text = "String Again";
    let trueHeader = `${this.props.day} ${this.state.text}`;
  return (
      <React.Fragment>
      <h1>{this.state.hasLoaded ?  trueHeader : "Loading..."}</h1>
    
      <input type={this.state.hasLoaded ? "text" : "hidden"} placeholder={this.props.day} onChange={(e) => {
              this.handleInputChange(e.target.value);
          }} />
         {this.state.hasLoaded ? <br /> : null} 
        <button onClick={this.handleBtnEvent}>Click Here!</button>
      </React.Fragment>
      
    );
    }
}

export default App;