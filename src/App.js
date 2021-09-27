import React,{useState} from 'react'
import Home from './Home';
import ParticlesBackground from './ParticlesBackground';
import Quiz from './Quiz.jsx'

function App() {

  const [val, setval] = useState(false);
 
  return (
    <div className="App">
      <ParticlesBackground />
      <Home setval={setval}  val={val}  />
      <Quiz  setval={setval}  val={val}/>

    </div>
  );
}

export default App;
