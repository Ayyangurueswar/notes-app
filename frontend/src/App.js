import React from 'react';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Hero from './components/Hero';
import Register from './components/Register';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {
  const {lightMode} = useSelector((state) => state.app);
  return (
    <Router>
      <div className={`w-full ${lightMode === 'light' ? '' : 'dark'} dark:bg-black dark:text-white transition min-h-screen`}>
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
 