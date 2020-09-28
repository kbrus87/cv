import React from 'react';
import styled from 'styled-components';

import avatar from '../imgs/myAvatar.svg';
import jspng from '../imgs/js.png';
import html5 from '../imgs/html5.png';
import css3 from '../imgs/css3.png';
import bootstrap from '../imgs/bootstrap.png';
import node from '../imgs/node.png';
import reactpng from '../imgs/react.png';
import github from '../imgs/github.svg';
import profilepic from '../imgs/profilepic.png';


const Container = styled.div`
    background-color:#34495E;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0;
    margin-top:2rem;

    @media (max-width: 768px) {
    flex-direction: row;
    width:100%;
    height:30%;
    max-width:100%;
    }

    /*height:100vh;*/
    padding:1rem;
    color:white;
    min-width:350px;
    max-width:30%;
    font-family: 'Noto Serif', serif;
    .details{
        background: rgba(255, 255, 255, 0.15); 
        backdrop-filter: blur(8px);
    }
     
    

`

const Avatar = styled.img`
    border-radius:50%;
    width:80%;
    max-width:200px;
    margin:1.5rem;
    margin-right:1rem;

`

const List = styled.ul`
    letter-spacing:2px;
    text-align:left;
    width:100%;
    padding:0.5rem;
    display:flex;
    flex-direction:column;
      
  
    border-radius:15px;
    padding-left:1rem;

    .title{
        font-weight:bold;
        
    }
    .title.git{
        font-size:1.5rem;
        font-weight:normal;
    }
    h4{
            font-size:1.3rem;            
        }
    .skill img {
        @media(min-width:768px){
            max-width:80px;
        }
        padding:0;
        margin:0.3rem;
        max-width:40px;

        
    }
    img.git{
        background-color:white;
        border-radius:15%;
        padding:0;
        margin:0;
        @media(min-width:768px){
            max-width:50px;
        }
    }
    li.git{
        background-color:rgba(255, 255, 255, 0.15);
        width:90%;
        /*background-color:#3F4448;*/
        border-radius:15% 5% 5% 5%;
        padding:0;
        margin:0;
    }
    li p{
        padding:0;
        margin:0 auto;
        font-size:1.5rem;
    }
    li a{
        display:flex;
        align-items:center;
        height:100%;
        width:100%;
        text-decoration:none;
        color:white;
        
    }
    margin-top:2rem;

    @media(min-width:400px){
        margin:1rem auto;
    }
`

const Li = styled.li`
    list-style:none;
    margin-bottom:0.8rem;
    display:flex;
    flex-wrap:wrap;

    &&:last-of-type{
        margin-bottom:0;
    }

    .name{
        
        text-align:center;
        font-weight:bold;
        width:100%;
        text-align:center;

        @media (max-width: 400px){
            font-size:2rem;
        }
    }
    
    .job{
        font-variant-caps:small-caps;
        font-size:1.5rem;
        color:rgba(255,255,255,0.8);
        margin-bottom:2rem;
        width:100%;
        text-align:center;
    }

    @media (max-width: 400px) {
        .location{
            display:none;
        }
    }

`

const PhoneIcon = styled.div`
    
    background:
        linear-gradient(to left,
            currentColor 5px,transparent 0)
            no-repeat 4px 12px/2px 2px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 14px;
    height: 20px;
    border: 2px solid;
    border-radius: 2px;

    margin-right:15px;
  
`

const MailIcon = styled.div`
    &,
  &::after {
    display: block;
    box-sizing: border-box;
    height: 14px;
    border: 2px solid;
  }
  & {
    overflow: hidden;
    transform: scale(var(--ggs, 1));
    position: relative;
    width: 18px;
    border-radius: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    border-radius: 3px;
    width: 14px;
    transform: rotate(-45deg);
    bottom: 3px;
    left: 0;
  }
  margin-right:15px;
 
}
`

const ArFlag = styled.div`
    border-top:solid 6px #74ACDF;
    border-bottom:solid 6px #74ACDF;
    background-color:white;
    border-radius:20%;
    width:18px;
    height:18px;
    position:relative;

    &&::after{
        content:' -';
        background-color:#DB950D;
        border-radius:100%;
        font-size:0.3rem;
        height:5px;
        position:absolute;
        top:0.6px;
        left:7px;
        color:transparent;
    }
    margin-right:15px;
`

const AddFileIcon = styled.i`
  & {
    background: linear-gradient(to bottom, currentColor 5px, transparent 0) no-repeat 2px 9px/6px
      2px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 16px;
    border: 2px solid transparent;
    border-right: 0;
    border-top: 0;
    box-shadow: 0 0 0 2px;
    border-radius: 1px;
    border-top-right-radius: 4px;
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 6px;
  }
  &::before {
    background: currentColor;
    left: 4px;
    width: 2px;
    top: 7px;
  }
  &::after {
    width: 6px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    right: -1px;
    top: -1px;
  }
  margin-right:15px;
`


const Sidebar = () => {

    return (
        <Container>
            <Avatar src={profilepic} />
            <List className="details">
                <Li><h1 className="name">Bruno Ramari</h1></Li>
                <Li><h3 className="job">Front End Developer</h3></Li>
                <Li><PhoneIcon/><h5>(+54) 341 2292261</h5></Li>
                <Li><MailIcon/><h5>bjramariutn@hotmail.com</h5></Li>
                <Li><ArFlag className="location"/><h5 className="location">Rosario, Santa Fe, Argentina</h5></Li>
                <Li><AddFileIcon className="location"/><h5 className="location">23-07-1987</h5></Li>
            </List>

            <List className="d-md-block col-12 col-md">
                <Li><h2 className="title">Skills</h2></Li>
                
                <div className="d-flex flex-wrap justify-content-around mt-0 pt-0">
                    <Li className="skill"><img src={jspng} alt="javascript"/></Li>
                    <Li className="skill"><img src={html5} alt="html5"/></Li>
                    <Li className="skill"><img src={css3} alt="css3"/></Li>
                    <Li className="skill"><img src={bootstrap} alt="bootstrap"/></Li>
                    <Li className="skill"><img src={reactpng} alt="reactJS"/></Li>
                    <Li className="skill"><img src={node} alt="node.js"/></Li>
                </div>

                <Li><h2 className="title git">My Github</h2></Li>
                <Li className="skill git"><a href="https://github.com/kbrus87" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="git"/><p>@kbrus87</p></a></Li>
            </List>
        </Container>
    );
}

export default Sidebar;