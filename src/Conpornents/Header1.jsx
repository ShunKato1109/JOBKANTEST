import React from "react";
import styled from "styled-components";

//header1
export const Sheader1 = styled.header`
background-color:#222222;
border:0.5px solid gray;
display:flex;
color:white;
height:25px;

@media(max-width:600px){
    flex-direction:column;
    height:50px;
}
`;

export const SfirstRowItem = styled.div`
display:flex;
height:100%;
> * {
    border:none;
}
 @media(max-width:600px){
    display:flex;
    height:50%;
    width:100%;
    > * {
        border:none;
        border-bottom:0.5px solid gray;
        width:100%;
    }
}
`;

export const SsecondRowItem = styled.div`
    display:flex;
    height:100%;
    > * {
        border:none;
    }
    @media(max-width:600px){
        display:flex;
        height:50%;
        width:100%;
        > * {
            border:none;
        }
    }
`;

export const SthirdRowItem = styled.div`
    display:flex;
    height:100%;
    // margin-left:auto;
    >*{
        display:flex;
        height:50%;
    }
`;

//header1 button css
export const SheadButton1={
    color:'#c0c0c0',
    backgroundColor:'transparent',
    fontSize:'1px',
    paddingLeft:'25px',
    paddingRight:'25px',
    cursor:'pointer',
    height:'100%',
    borderRight:'0.5px solid gray',
};

//header button2 css
export const SheadButton2={
    color:'#c0c0c0',
    backgroundColor:'transparent',
    fontSize:'10px',
    paddingLeft:'25px',
    paddingRight:'25px',
    cursor:'pointer',
    height:'100%',
    borderRight:'0.5px solid gray',
  };

//header1 button
export const HeadButton1 =(props)=>{
    return <button style={SheadButton1}>{props.label}</button>
  };
  
  //header button2
  export const HeadButton2 =(props)=>{
    return <button style={SheadButton2}>{props.label}</button>
  };
