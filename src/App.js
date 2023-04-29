// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#131518'
      showAlert('Dark mode is enabled', 'success')

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is enabled', 'success')
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <Routes> */}
          {/* <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
         <Route exact path='about' element = {<About mode={mode} /> } />
         </Routes> */}
      </div>
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
