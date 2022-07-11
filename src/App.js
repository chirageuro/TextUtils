import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
     
    setTimeout(() =>{
      setalert(null);
    },1500)

  }
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    <Router>
     <Navbar title = "Textutils" abouttext = "About Textutils" mode={mode} togglemode={togglemode}/> 
     <Alert alert = {alert}/>
     <div className="container my-3">
     <Routes>
      <Route exact path='/about' element={<About/>} />
         
      <Route exact path='/' element={<Textform showalert = {showalert} heading = "Enter the text you want to analyze" mode={mode}/>} />
          
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
