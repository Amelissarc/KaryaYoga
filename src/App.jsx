import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header/Header';
import ItemListContainer from './components/content/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/content/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './components/content//Error/ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="All Products" />
          }
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Category:" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}