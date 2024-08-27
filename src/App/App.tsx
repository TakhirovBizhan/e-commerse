import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from '../Components/Header' 

import Users from './Users';
import User from './User';

const App = () => {   
  return (     
    <BrowserRouter>
    <Header />         
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user" element={<User />} />
      </Routes>    
    </BrowserRouter>   
  ); 
};

export default App
