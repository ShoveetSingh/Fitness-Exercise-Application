//import react from 'react';
import  ReactDOM  from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App/> 
    </BrowserRouter>
)