import React from "react";
import './App.css';
import Header from '../src/Component/Header'
import Liste_test from '../src/Component/Liste_test'
import FilmList from "./Component/FilmList";


function App() {
  return (
    <div className="App">
       <Header />
       <Liste_test />
       <FilmList />
    </div>
        
  );
}

export default App;
