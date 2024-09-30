// import { useState } from 'react'
import React from 'react';
import './App.css'
import RootLayout from './RootLayout.jsx'
import Home from './Home.jsx'
import CountryPage from './CountryPage.jsx'
import { countriesLoader } from './components/Card.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// import Navbar from './components/Navbar.jsx'
// import Search from './components/Search.jsx'
// import Filter from './components/Filter.jsx'
// import CardContainer from './CardContainer.jsx'

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={countriesLoader}/>
      <Route path="country/:name" element={<CountryPage />} />
  </Route>
)

const router = createBrowserRouter(routesFromElements);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
};

export default App
