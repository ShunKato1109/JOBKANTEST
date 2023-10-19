import React from "react";
import styled from "styled-components";
import { HeaderDropDown } from "./HeaderDropDown";


//header1 Css
export const Sheader1 = styled.header`
background-color:#222222;
border:0.5px solid gray;
display:flex;
color:white;
height:25px;
}
`;

//FirstRowDiv Css
export const SfirstRowItem = styled.div`
display:flex;
height:100%;
flex-shrink:0;
> * {
    border:none;
}
`;

//SecondRowDiv Css
export const SsecondRowItem = styled.div`
    display:flex;
    height:100%;
    width:100%;
    > * {
        border:none;
    }
`;

//ThirdRowDiv Css
export const SthirdRowItem = styled.div`
    display:flex;
    height:100%;
    margin-left:;
    >*{
        display:flex;
        height:50%;
    }
`;

//Header1 button css
export const SheadButton1={
  fontSize:'11px',
  paddingLeft:'25px',
  paddingRight:'25px',
  cursor:'pointer',
  height:'100%',
  borderRight:'0.5px solid gray',
};

//Header button2 css
export const SheadButton2={
  fontSize:'10px',
  paddingLeft:'25px',
  paddingRight:'25px',
  cursor:'pointer',
  height:'100%',
  borderRight:'0.5px solid gray',
};

  //Header button3 css
export const SheadButton3={
    color:'#c0c0c0',
    backgroundColor:'transparent',
    fontSize:'10px',
    marginLeft:'auto',
    paddingLeft:'25px',
    paddingRight:'25px',
    cursor:'pointer',
    height:'100%',
    borderRight:'0.5px solid gray',
  };

  export const SHeadButton = styled.button`
  color:#c0c0c0;
  background-color:transparent;
  &:hover{
    color:white;
    background-color:black;
  }
  `; 

  //header1 button Compornent
export const HeadButton1 =(props)=>{
    return <SHeadButton style={SheadButton1}>{props.label}</SHeadButton>
  };
  
  //header button2 Compornent
  export const HeadButton2 =(props)=>{
    return <SHeadButton style={SheadButton2}>{props.label}</SHeadButton>
  };

    //header button3 Compornent
    export const HeadButton3 =(props)=>{
        return <button style={SheadButton3}>{props.label}</button>
      };


//WideDeskTopCompornent
export const WideDeskTopHeader = ()=>{
    return (
    <Sheader1>
      <SfirstRowItem>
        <HeadButton1 label="ジョブカン" />
      </SfirstRowItem>
      <SsecondRowItem>
        <HeadButton2 label="勤怠" />
        <HeadButton2 label="労務" />
        <HeadButton2 label="給与" />
        <HeaderDropDown />
        </SsecondRowItem>
    </Sheader1>
    )
};
