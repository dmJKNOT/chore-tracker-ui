import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";


interface UnimplementedPageProps {
    routeToPage?: string;
}
export function UnimplementedPage(props: UnimplementedPageProps) {
    return(<div>Sorry, but {props.routeToPage ?? "this page"} is not implemented yet. Go fix that!</div>)
}

function App() {

  return (
        <div id="app" className="App">
            <Routes>
                <Route path="/" element={ <WelcomePage/> } />
            </Routes>
        </div>
  );
}
export default App;


function WelcomePage() {
    return (
        <div>WELCOME PAGE</div>
    );
}
