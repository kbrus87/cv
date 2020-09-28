import React, { useContext } from 'react';
import styled from 'styled-components';

import {LangContext} from '../context/langContext'; 

const Navi = styled.nav`
    width:100%;
    background-color:black;
    position:fixed;
    z-index:1;
    display:flex;
    justify-content:flex-end;

    
    
    button{
        background-color:transparent;
        border:none;
        color:white;
        font-style:italic;
        padding:0.5rem 0;
        padding-right:2rem;
    }
`


const Navbar = () => {

    const { setLang, lang } = useContext(LangContext)

    const changeLanguage = () => {
        if(lang==="es"){
            setLang("en");
            return
        }else
        if(lang==="en"){
            setLang("es");
            return
        }
    }

    return ( 
        <Navi>
            <button onClick={changeLanguage} lang="es">Change Language Sp/En</button>
            <button onClick={changeLanguage} lang="en">Cambiar Idioma Es/En</button>
        </Navi>
     );
}
 
export default Navbar;