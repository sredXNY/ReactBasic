import React from 'react';


class App extends React.Component{
    render(){
        return <h1>{this.props.text}</h1>
        //return React.createElement('h1',null, 'Hello creating from React!')
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
}

App.defaultProps={
    text:"this is react!! default prop"
}

//const App= () => <h1>Return stateless component</h1>
export default App