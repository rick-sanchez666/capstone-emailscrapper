import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import QueryForm from './components/Queryform';
import React, { useState } from 'react';
import LoginContext from './Auth';



function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <LoginContext.Provider value={isUserLoggedIn}>
          <Header onLogout={setIsUserLoggedIn} />
          <main>
            <Routes>
              <Route exact path='/' element={<Login onLogin={setIsUserLoggedIn} />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/query' element={<QueryForm />} />
            </Routes>
          </main>

        </LoginContext.Provider>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;
