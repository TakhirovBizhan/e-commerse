import './App.css'
import Header from '../Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
import About_us from '../Pages/About_us';





const App = () => {
  return (
    <BrowserRouter>   
      <Header />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path='/About_us' element={<About_us />} />
      </Routes>    
    </BrowserRouter>   
  );
};

export default App
