import './App.css'
import Header from '../Features/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
import About_us from '../Pages/About_us';
import Favorites from '../Pages/Favorites';
import Profile from '../Pages/Profile';
import NotFound from '../Pages/NotFound';



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path='/About_us' element={<About_us />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main >
    </BrowserRouter>
  );
};

export default App
