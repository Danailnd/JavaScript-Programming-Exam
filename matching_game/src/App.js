import './App.css';
import test from './custom_modules/test.js';



  const test1 = {
    backgroundColor: 'red',
    fontSize: 33
  }

 
  


function App() {
  const dog = test();
  return (
    <div>
    <h3 style = {test1}>Matching Game</h3>
    </div>
  );
}

export default App;
