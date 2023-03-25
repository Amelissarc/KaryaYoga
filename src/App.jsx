import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header/Header';
import Navbar from './components/header/NavBar/NavBar';
import ItemListContainer from './components/content/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/content/ItemDetailContainer/ItemDetailContainer';

export default function App() {
  console.log(
    `${new Date().getDate()} / ${new Date().getUTCMonth()} / ${new Date().getFullYear()}`
  );
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Listado de todos los productos" />
          }
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Listado de categoria:" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}