import React from 'react';
import NavBar from './components/navbar';
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom'
import Home from '../src/pages/Home';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';
import Profile from '../src/pages/Profile';
import CreatePost from '../src/pages/CreatePost';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/signin">
      <Signin />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>
    <Route path="/create">
      <CreatePost />
    </Route>
    </BrowserRouter>
  );
}

export default App;
