import {React, useState} from 'react';
import './App.css';
import Button from "./gagaComponents/Button";
import Heading from "./gagaComponents/Heading";
import gaga1 from "./images/gagav1.jpg";
import {BrowserRouter, Routes, Route, Link, Switch, Redirect} from 'react-router-dom';
//import useHistory from 'react-router-dom' have to install it too
import Quiz from "./gagaComponents/Quiz"
import Home from "./Home"
import Results from "./Results"


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>     
    </div>
  );
}