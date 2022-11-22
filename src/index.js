import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayOut from './pages/LayOut/LayOut';
import Profile from './pages/Profile/Profile';
import A404 from './pages/404';
import AddMovie from './pages/AddMovie/AddMovie';
import Movies from './component/Movie/Movie';
import MovieItem from './pages/MovieItem/MovieItem';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut />} >
        <Route index element={<App />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="addMovie" element={<AddMovie />} />
        <Route path="movies" element={<Movies />} />
        <Route path='movies/:id' element={<MovieItem />} />
        <Route path="*" element={<A404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
)