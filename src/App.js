import React,{useState} from 'react'
import Home from './Home';
import ParticlesBackground from './ParticlesBackground';
import Quiz from './Quiz.jsx'

function App() {

  const [val, setval] = useState(false);
  const [namee,setnamee] =useState('')
 
  return (
    <div className="App">
      <ParticlesBackground />
      <Home setval={setval}  val={val}  namee={namee} setnamee={setnamee}/>
      <Quiz  setval={setval}  val={val}  namee={namee} setnamee={setnamee}/>

    </div>
  );
}

export default App;
