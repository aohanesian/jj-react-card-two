import Card from './components/Card'
import './App.css';
import React from "react";

function App() {
    return (
        <React.Fragment>
            <Card title={`Hi`}/>
            <Card text={`how are you?`}/>
            <Card title={`Hi`} text={`how are you?`}/>
        </React.Fragment>
    );
}

export default App;