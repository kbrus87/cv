import React from 'react';
import styled from 'styled-components';

import Portfolio from './portfolio';
import sfc from '../imgs/SFC.jpg';

const Container = styled.div`
        margin: 3rem 3rem 3rem 3rem;
        
        h2{
            font-weight:bold;
            letter-spacing:0.5rem;
            text-decoration:underline;
            margin-top:2rem;  
        }
        h2:first-of-type{
                margin-top:0;
                
        }
        
        @media(min-width:768px){
            margin: 5rem 10rem 5rem 8rem;
            
        }
       

        p.profile{
            font-style:oblique;
        }
        p.profile:first-of-type::first-letter{
            font-size:3rem;
            font-weight:bold;
        }
    `
const EmploymentHistory = styled.ul`

    margin:0;
    padding:0;
    display:flex;
    flex-direction:column;

    h3.jobTitle{
            font-variant:small-caps;
            font-size:1.5rem;
        }
    li:first-of-type{
        margin:1.5rem 0;
    }
    li:first-of-type, li{
        list-style:none;
    }
    p.timeframe{
        color:gray;
        font-variant:small-caps;
    }
    li::after{
        content:'---------';
        width:100%;
        color:gray;
        font-size:1rem;
        height:100%;
    }
    li:last-of-type::after{
        content:''
    }
    li:last-of-type{
        margin-bottom:0;
    }
`

const Education = styled.ul`

    margin:0;
    padding:0;
    
    h2:first-of-type{
                margin-top:3rem;
            }

    h3.jobTitle{
            /*font-variant:small-caps;*/
            font-size:1.2rem;
            padding:0
        }
    li{
        list-style:none;
        display:flex;
        align-items:center;
        margin-bottom:1rem;
        @media(min-width: 768px){
            margin-bottom:0rem;
        }
    }
    p.timeframe{
        color:gray;
        font-variant:small-caps;
    }
    
`

const OtherKnow = styled.ul`

    margin:0;
    padding:0;
    
    h2:first-of-type{
                margin-top:3rem;
            }

    h3{
            /*font-variant:small-caps;*/
            font-size:1.5rem;
            padding:0
            font-weight: bold;
            letter-spacing:0.4rem;
            text-decoration:underline;
            margin-top:2rem;  
        }
    li{
        list-style:none;
        display:flex;
        align-items:center;
        margin-bottom:1rem;
        @media(min-width: 768px){
            margin-bottom:0rem;
        }
    }
    p.timeframe{
        color:gray;
        font-variant:small-caps;
    }
    span{
        font-weight:bold;
        font-style:italic;
    }
    a{
        text-decoration:none;
        font-style:italic;
        color:blue;
    }
    
`;

const Resume = () => {

    
    return ( 
        <>
        <Container lang="en">
            <h2>Profile</h2>
            <p className="profile">Web Developer proficient in HTML, CSS, Javascript and React with some experience working with MySQL, PHP, Node and Firebase.</p>
            <p className="profile">
                Challanges and new Ideas drive my motivation.
            </p>
            
            <Portfolio />
            <EmploymentHistory>
                <h2>Employment History</h2>
                <li>
                    <h3 className="jobTitle">Mechanical Integrity Inspector at BRUKE S.A.</h3>
                    <p className="timeframe">December 2012 - Present</p>
                    <p className="description">
                        Pressure vessel, pipeline, concrete  and welding inspector using non destructive testing techniques as per ASME VIII and other standards.
                    </p>
                    <p className="description">
                        Technology leader responsable for incorporation and selection of new technologies, personnel training in said technologies and development of procedures for advances techniques.
                        </p>
                </li>
                <li>
                    <h3 className="jobTitle">PC repair technician at FIREHEAD GROUP</h3>
                    <p className="timeframe">June 2009 - June 2012</p>
                    <p className="description">
                        PC formating and backup. OS instalacion. Hardware, audio cards, video cards, dvd reader instalation and configuration. Notebook repairs.
                    </p>     
                </li>
            </EmploymentHistory>
            <Education>
                <h2>Education</h2>
                <li>
                    <h3 className="jobTitle col-9">Javascript Fullstack Developer at EducacionIT</h3>
                    <p className="timeframe col-3">2020</p>  
                </li>
                <li>
                    <h3 className="jobTitle col-9">Chemical Engineering at utn-frro</h3>
                    <p className="timeframe col-3">88% completed</p>  
                </li>
                <li>
                    <h3 className="jobTitle col-9">Superior Technical Chemist at utn-frro</h3>
                    <p className="timeframe col-3">2018</p>
                </li>
                
            </Education>
            <OtherKnow>
                <li>
                    <h3>Other knowledge and Courses</h3>
                </li>
                <li>
                    <h5>Native Spanish Language Speaker</h5>
                </li>
                <li>
                    <h5>Advanced Written and Oral English Language</h5>
                </li>
                <li>
                    <h5>Advanced Microsoft Word and Excel </h5>
                </li>
                <li>
                    <h5><span>Udemy Course</span>
                        <a href="https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/" target="_blank" rel="noopener noreferrer" > Basic Web Development (HTML, CSS, JS, PHP, MySQL)  </a>
                    </h5>
                </li>
                <li>
                    <h5><span>Udemy Course</span>
                        <a href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/" target="_blank" rel="noopener noreferrer" > MERN stack based Web Development  </a>
                    </h5>
                </li>
                <li>
                    <h5><span>Coursera Course</span>
                        <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer" > Machine Learning by Stanfor University</a>
                    </h5>
                </li>
                
                <li>
                    <h5><span>SCRUM Fundamentals Certified</span>
                        <a href={sfc} target="_blank" rel="noopener noreferrer" > Certificate  </a>
                    </h5>
                </li>
            </OtherKnow>
        </Container>
        <Container lang="es">
            <h2>Perfil</h2>
            <p className="profile">Desarrollador Web con competencias en HTML, CSS, Javascript y React principalmente y con alguna experiencia trabajando con MySQL, PHP, Node y Firebase.</p><p className="profile"> Me motivan los desafíos y las ideas nuevas.</p>
            
            <Portfolio />
            <EmploymentHistory>
                <h2>Experiencia Laboral</h2>
                <li>
                    <h3 className="jobTitle">Inspector de Integridad Mecánica en BRUKE S.A.</h3>
                    <p className="timeframe">Diciembre 2012 - Presente</p>
                    <p className="description">
                        Inspector de recipientes sometidos a presion, gasoductos, estructuras de hormigón y soldadura por medio de ensayos no destructivos según ASME VIII y otros códigos.
                    </p>
                    <p className="description">Lider de Tecnología siendo responsable de la selección de tecnologías a incorporar, capacitación de personal en nuevas tecnologías y desarrollo de procedimientos para técnicas de avanzada.
                    </p>
                </li>
                <li>
                    <h3 className="jobTitle">Técnico de PC en FIREHEAD GROUP</h3>
                    <p className="timeframe">Junio 2009 - Junio 2012</p>
                    <p className="description">
                        Formateo de PC. Instalación de Sistema Operativo. Instalación y configuración de hardware, placas de video, placas de sonido, lectoras de dvds, etc, reparación de notebooks.
                    </p>     
                </li>
            </EmploymentHistory>
            <Education>
                <h2>Educación</h2>
                <li>
                    <h3 className="jobTitle col-9">Javascript Fullstack Developer en EducacionIT</h3>
                    <p className="timeframe col-3">2020</p>  
                </li>
                <li>
                    <h3 className="jobTitle col-9">Ingeniería Química en UTN-FRRO</h3>
                    <p className="timeframe col-3">88% completado</p>
                </li>
                <li>
                    <h3 className="jobTitle col-9">Técnico Químico Universitario en UTN-FRRO</h3>
                    <p className="timeframe col-3">2018</p>
                </li>
                <li>
                    <h3 className="jobTitle col-9">Polimodal orientado a Gestión de Empresas en Dante Alighieri</h3>
                    <p className="timeframe col-3">2005</p>
                </li>
            </Education>
            <OtherKnow>
                <li>
                    <h3>Otros Conocimientos y Cursos</h3>
                </li>
                <li>
                    <h5>Ingles Avanzado Oral y Escrito </h5>
                </li>
                <li>
                    <h5>Microsoft Excel y Word Avanzado </h5>
                </li>
                <li>
                    <h5><span>Udemy Course</span>
                        <a href="https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/" target="_blank" rel="noopener noreferrer" > Desarrollo Web Completo (HTML5, CSS3, JS, PHP, MySQL)  </a>
                    </h5>
                </li>
                <li>
                    <h5><span>Udemy Course</span>
                        <a href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/" target="_blank" rel="noopener noreferrer" > Desarrollo Web basado en MERN Stack  </a>
                    </h5>
                </li>
                <li>
                    <h5><span>Coursera Course</span>
                        <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer" > Machine Learning by Stanfor University</a>
                    </h5>
                </li>
                <li>
                    <h5><span>SCRUM Fundamentals Certified</span>
                        <a href={sfc} target="_blank" rel="noopener noreferrer" > Certificate  </a>
                    </h5>
                </li>
            </OtherKnow>
        </Container> 
        </>
     );
}
 
export default Resume;