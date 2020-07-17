import React, { Component } from 'react';
import Weather from './Weather/Weather'
import Navbar from './Navbar/navbar'
import Footer from './Footer/footer.js'
import './App.css';

/**
 * This example illustrates a simple react project
 * that works with an external API.
 *
 * Take note of the comments they point common
 * problems you will need to solve with React.
 *
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components
 *
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component.
 *
 * */

function App() {
  return (
    <div>
      <Navbar />
      <Weather />
      <Footer />
    </div>
  )
}

export default App;