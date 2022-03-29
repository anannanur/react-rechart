
import './App.css';
import MyLineChart from './Components/MyLineChart/MyLineChart';
import SpecialChart from './Components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
      <div style={{padding:'50px'}}>
        <animated.div style={props}>
          <h1 style={{color:'green'}}>I will fade in</h1>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
