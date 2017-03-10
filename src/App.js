import React from 'react';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            txt: 'this is the state txt',
            currentEvent: '---'
        }
        this.update2= this.update2.bind(this)
    }

    update(e){
        this.setState({txt:e.target.value});
    }

    update2(e){
        this.setState({currentEvent:e.type});
    }

    render(){
        return <div>
                    <h1>{this.state.txt}</h1>
                    <Widget update={this.update.bind(this)}/>
                    <Button>I <Heart/> React</Button>
                    <Title text="The text title!"></Title>

                    <label>This is for Syntethic events</label>
                    <textarea
                        onKeyPress={this.update2}
                        onCut={this.update2}
                        onPaste={this.update2}
                        cols="30" rows="10"/>
                    <h1>{this.state.currentEvent}</h1>
                </div>
        //return React.createElement('h1',null, 'Hello creating from React!')
    }
}


const Widget= (props) =>  <input type="text" onChange={props.update}/>
const Button= (props) =>  <button>{props.children}</button>
const Title=  (props) =>  <h1>Title: {props.text}</h1>
//const App= () => <h1>Return stateless component</h1>

Title.propTypes={
    text(props,propName,component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`);
        }
        if(props[propName].length<6){
            return new Error(`Length must be >6 characters ${propName}`)
        }
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
}

App.defaultProps={
    text:"this is react!! default prop"
}

class Heart extends React.Component{
    render(){
        return <span>&hearts;</span>
    }
}
export default App