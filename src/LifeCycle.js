import React from 'react';
import ReactDOM from 'react-dom'

class LifeCycle extends React.Component{
    constructor(){
        super();
        this.state={val: 0}
        this.update=this.update.bind(this)
    }
    update(){
        this.setState({val:this.state.val+1})
    }

    componentWillMount(){
        console.log("will mount");
    }

    render(){
        console.log('render');
        return <button onClick={this.update}>{this.state.val}</button>
    }

    componentDidMount(){
        console.log("did mount");
    }

}

class Wrapper extends React.Component{
    mount(){
        ReactDOM.render(<LifeCycle/>,document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return <div>
            <button onClick={this.mount.bind(this)}>Mount</button>
            <button onClick={this.unmount.bind(this)}>Unmount</button>
        </div>
    }
}

export default Wrapper;