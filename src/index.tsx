import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from "react-dom/client";
import ReactDOM from 'react-dom';

function Index() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
ReactDOM.render(<Index />, container);

