import React, { Component } from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            contadorValue : ''
        }
    }

    componentDidMount() {
        
        setInterval(function(){

            fetch("http://localhost:1000/contador/getData")
            .then(res => res.json())
            .then(
                (result) => {
                console.log(result);
                this.setState({
                    contadorValue: result
                })
                }
            )

        }.bind(this), 1000);
        
    }

    scoreboard() {
        return <input value={this.state.contadorValue} readOnly></input>
    }

    increment() {
        fetch("http://localhost:1000/contador/soma")
    }

    render() { 
        return (  
            <div>
                { this.scoreboard() }
                <button onClick={ this.increment }>
                    Somar
                </button>
            </div>
        );
    }
}


export default Contador;