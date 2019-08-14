import React, { Component } from 'react';
import './App.css';
import ResultComponent from './Components/ResultComponent';
import KeyPadComponent from "./Components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){     //this.Calculate => Calculate the result of our expression, this is triggered, when “=” button is pressed.
            this.calculate()
        }

        else if(button === "C"){ //this.Reset => Clear our output, this is trigered when “C” is pressed.
            this.reset()
        }
        else if(button === "CE"){ //this.Backspace => Clear the last character that was pressed. triggered on “CE”.
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>React Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;