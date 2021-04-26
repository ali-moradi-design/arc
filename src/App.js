import './App.css';
import First from './components/first/first';

const hanldeClick = ()=>{
  console.log('hello');
}

function App() {
  return (
    <div>
     <First name="ali"/>
     <p>the current time in tehran is {new Date().toLocaleTimeString() }</p>
     <button onClick={hanldeClick}>click me</button>
     <input type="checkbox"></input>
    </div>
  );
}

export default App;
