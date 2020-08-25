import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <main>
        <Route
          exact
          path="/"
          render={() => (<Home/>)
        }/>
        <Route
          path="/projects"
          render={() => (<Projects/>)
        }/>
        <Route
          path="/contact"
          render={() => (<Contact/>)
        }/>
      </main>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
