import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Posts} />
      <Route path="/contact" component={Contact} />
      <Route path="/:post_id" component={PostDetail} />
    </BrowserRouter>
  );
}

export default App;
