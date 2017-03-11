import React from 'react';
import ReactDOM from 'react-dom'

class LifeCycle extends React.Component{
    constructor(){
        super();
        this.state={increasing: false}
        this.update=this.update.bind(this)
    }
    update(){
        ReactDOM.render(<LifeCycle val={this.props.val+1}/>,document.getElementById('a'))
    }

    componentWillReceiveProps(nextProps){
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps%5 === 0;
    }
    componentWillMount(){
        console.log("will mount");
    }

    render(){
        console.log(this.state.increasing);
        return <button onClick={this.update}>{this.props.val}</button>
    }

    componentDidMount(){
        console.log("did mount");
    }

}

LifeCycle.defaultProps={val:0}

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