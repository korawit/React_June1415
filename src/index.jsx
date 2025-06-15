import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Hello from './Hello';
//import Counter from './Counter';
//import Buylist from './Buylist';
//import Form from './Form';
//import Bmi from './Bmi';
import Bookstore from './Bookstore';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bookstore/>
    {/*<Bmi />
    <Form />
    <Hello name="korawit" surname="orkphol" age={30}/>
    <Hello name="John"/>
    <Hello surname="Doe"/>
    <Counter />
    <Counter />
    <Buylist />*/}
    </React.StrictMode> 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
