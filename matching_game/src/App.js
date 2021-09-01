import './App.css';
import test from './custom_modules/test.js';
import Paper from '@material-ui/core/Paper';



  const classes = {
    test : {
    fontSize: 33},
  }

 
  


function App() {
  const dog = test();
  return (
    <>
    <div className="App" >
    <h3 style = {classes.test}>Matching Game</h3>
    </div>
    
    </>
  );
}

export default App;
