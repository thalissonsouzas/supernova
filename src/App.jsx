import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
