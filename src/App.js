import {useState} from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

//Get Random Animals function
function getRandomAnimals(){
    const animals = ['cat','dog','cow','gator','bird','horse'];
    return animals[Math.floor(Math.random() * animals.length)]; 
}

//App function
function App(){
    
    const [animals,setAnimals] = useState([]);  // State system 

    const handleClick =() =>{
        setAnimals([...animals,getRandomAnimals()])  // Events 
    };

    const renderAnimals = animals.map((animal,index) => {
        return <AnimalShow type={animal} key={index} />; //Rendering the Image 
    });
    return (
        <div className='bgcolor'>
        <div className='app'>
            <button onClick={handleClick}>
                Add animal 🙂
            </button>
            <div className='animal-list'>{renderAnimals}</div>
        </div>
    </div>
    );
}

export default App;




//Call Back inline in 9th Line using Arrow Function.
// return <div>Show animal list here !</div>
    // const handleClick = () =>
    // {
    //     console.log('Button was clicked!');
    // }
    //const [count,setCount] = useState(0) onClick={() => setCount(count+1)};