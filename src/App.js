import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/diagnose' element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
