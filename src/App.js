import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./Styles/mixins.scss"
import React from 'react';

import Products from "./Pages/Products/Products"

import NavBar from "./Components/NavBar/NavBar";
import CustomModal from "./Components/CustomModal/CustomModal";
import { GlobalContext } from './Utils/Contexts';
import { Modal } from 'bootstrap';
import Category from "./Pages/Category/Category";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./Components/Layout/Layout";

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>

        <Routes>
          <Route element={<Layout />}>
            <Route path={'/'} element={<Category />} />
            <Route path={'/product'} element={<Products />} />

          </Route>

        </Routes>

      </BrowserRouter >



    );
  }



}

export default App;
