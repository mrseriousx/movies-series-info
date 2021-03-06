import React from 'react';
import './App.css';

import { HashRouter , Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';


import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter >
        <div>
          <Navbar />

          <Route exact path="/" component={Landing}/>
          <Route exact path="/movie/:id" component={Movie}/>


          
          <Footer />
        </div>

      </HashRouter>
    </Provider>

  );
}

export default App;
