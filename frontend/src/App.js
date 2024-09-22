import React from 'react';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Hero from './components/Hero';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path='' element={<Hero />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Route>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
 