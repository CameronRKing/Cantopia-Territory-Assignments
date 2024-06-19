import './App.css';
import * as React from 'react';
import TerritoryAssignment from './components/TerritoryAssignment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='AppContainer'>
      <Router>
        <Routes>
          <Route
            path='/Cantopia-Territory-Assignments'
            element={
              <TerritoryAssignment />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
