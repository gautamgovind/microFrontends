import React from 'react';


//Error Boundary has to be a class

export default class SafeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }

    //Method to check errors
    static getDerivedStateFromError(error){

    }

    componentDidCatch(){

    }

    render(){
        if(this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }
        return this.props.children;
    }
}