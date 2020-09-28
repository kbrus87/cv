import React from "react";
import styled from 'styled-components';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import weather from '../imgs/weath.png';
import bebidas from '../imgs/bebs.png';
import doggie from '../imgs/dog.png';
import ecom from '../imgs/ecom.png';
import crypto from '../imgs/cripto.png'

const Div = styled.div`
    &&:hover{
        cursor:pointer;
    }
`

const Portfolio = () => {



    return ( 
        <>
            <h2 lang="es">Proyectos</h2>
            <h2 lang="en">Projects</h2>
            
            <Carousel autoPlay>

                <Div onClick={() => {window.open("https://bjr-eshop.netlify.app/", "_blank")}}>
                <img alt="" src={ecom} />
                <p className="legend" lang="es">Gestor de Productos con React + Firebase</p>
                <p className="legend" lang="en">Product Management App with React + Firebase</p>
                </Div>

                <Div onClick={() => {window.open("https://bjr-bebidas.netlify.app", "_blank")}}>
                <img alt="" src={bebidas} />
                <p className="legend" lang="es">Buscador de recetas de bebidas con React</p>
                <p className="legend" lang="en">Cocktail recipe searcher with React</p>
                </Div>

                <Div onClick={() => {window.open("https://bjr-crypto-cotizador.netlify.app/", "_blank")}}>
                <img alt="" src={crypto} />
                <p className="legend" lang="es">Weather app with React</p>
                <p className="legend" lang="en">Weather app con React</p>
                </Div>
                
                <Div onClick={() => {window.open("https://bjr-clima-api.netlify.app/", "_blank")}}>
                <img alt="" src={weather} />
                <p className="legend" lang="es">Weather app with React</p>
                <p className="legend" lang="en">Weather app con React</p>
                </Div>
                

                <Div onClick={() => {window.open("https://bjr-doggie-html-css.netlify.app/", "_blank")}}>
                <img alt="" src={doggie} />
                <p className="legend" lang="es">Un perrito amistoso con HTML y CSS</p>
                <p className="legend" lang="en">Just a Friendly Doggie with HTML and CSS</p>
                </Div>

                
                
            </Carousel>
        </>
     );
}
 
export default Portfolio;