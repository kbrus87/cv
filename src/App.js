import React, {
  useState,
  useEffect
} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/sidebar";
import Resume from './components/resume';
import Navbar from './components/navbar';
import LangProvider from './context/langContext';
import {
  createGlobalStyle
} from "styled-components";



const GlobalStyles = createGlobalStyle `
  
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap');
  body{
    font-family: 'Noto Serif', serif;
  }

  h5{
    font-size:1rem;
  }

  p{
    font-size:1rem;
  }

  .Main{
    display:flex;
    @media(max-width:768px){
      flex-direction:column;
    }
  }

  .hiddenLang{
    display:none !important;
  }
`

function App() {

  return ( 
  <>
    <LangProvider>
      <GlobalStyles/>
      
      <div className = "Main">
        <Navbar/>
        <Sidebar/>
        <Resume/>
      </div> 
    </LangProvider>
  </>
  );
}

export default App;