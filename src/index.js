// 1) Import the React and ReactDOM Lib
import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//2) Get a reference to the div with ID Root
const el = document.getElementById("root");


//3) Tell React to Take control of that element
const root = ReactDOM.createRoot(el);

//4) Create a Component

//export default function App(){
    // const date = new Date();
    // const time = date.toLocaleTimeString();
    // const name = 'Sam';
    // const age = 21;
    // return(
    //     <h1>
    //         Hi I am {name}, I am {age}
    //     </h1>
    //     );
    // 
    //return <input maxLength={5} />
//};
//5) Show the COmponent the screen
root.render(<App />);
