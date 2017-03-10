import React from 'react';
import ReactDOM from 'react-dom';

class App2 extends React.Component{
    constructor(){
        super()
        this.state={
            a:'',
            b:''
        }
    }

    update(){
        this.setState({a:ReactDOM.findDOMNode(this.a).value,
                       b:ReactDOM.findDOMNode(this.b).value})
    }

    render(){
        return (
            <div>
                <Input  ref={component => this.a= component}
                        update={this.update.bind(this)}/>{this.state.a}
                <hr/>
                <Input  ref={component => this.b = component}
                        update={this.update.bind(this)}/>{this.state.b}
            </div>
        )
    }
}

class Input extends React.Component{
    render(){
        return <input onChange={this.props.update}/>
    }
}

export default App2