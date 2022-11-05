import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarListContextProvider } from 'context/CarListContext';
import HomePage from 'pages/homePage/HomePage';
import DetailPage from 'pages/detailPage/DetailPage';
import Layout from './layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <CarListContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Layout>
      </CarListContextProvider>
    </BrowserRouter>
  );
};

export default Router;
