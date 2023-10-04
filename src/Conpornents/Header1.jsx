import React from "react";
import styled from "styled-components";

//header1
export const Sheader1 = styled.header`
background-color:#222222;
display:flex;
flex-wrap:wrap;
align-items:strech;
color:white;
height:25px;

@media(max-width:300px){
    flex-direction:column;
}
  }
`;

//header1 button css
export const SheadButton1={
  color:'#c0c0c0',
  backgroundColor:'transparent',
  fontSize:'70%',
  fontWeight:'bold',
  paddingLeft:'25px',
  paddingRight:'25px',
  cursor:'pointer',
  border:'none',
  borderRight:'0.5px solid gray',
};

//header1 button
export const HeadButton1 =(props)=>{
  return <button style={SheadButton1}>{props.label}</button>
};

//header button2 css
export const SheadButton2={
    color:'#c0c0c0',
    backgroundColor:'transparent',
    fontSize:'60%',
    paddingLeft:'25px',
    paddingRight:'25px',
    cursor:'pointer',
    border:'none',
    borderRight:'0.5px solid gray',
  };
  
  //header button2
  export const HeadButton2 =(props)=>{
    return <button style={SheadButton2}>{props.label}</button>
  };
