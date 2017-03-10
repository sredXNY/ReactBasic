import React from 'react';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            txt: 'this is the state txt'
        }
    }

    update(e){
        this.setState({txt:e.target.value});
    }

    render(){
        return <div>
                    <h1>{this.state.txt}</h1>
                    <Widget update={this.update.bind(this)}/>
                </div>
        //return React.createElement('h1',null, 'Hello creating from React!')
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
}

App.defaultProps={
    text:"this is react!! default prop"
}

const Widget= (props) =>  <input type="text" onChange={props.update}/>

//const App= () => <h1>Return stateless component</h1>
export default App