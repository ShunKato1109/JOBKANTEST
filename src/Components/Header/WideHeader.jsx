import React from "react";
import styled from "styled-components";
import { HeaderDropDown } from "./Parts/HeaderDropDown";
import { BrowserRouter as Router,Link } from 'react-router-dom';
// import { KintaiButton } from "./Parts/HeaderNaviBtn";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
const Shead = styled.header` //ヘッダー全体を囲うスタイル
    background-color:#242E33;
    height:100px;
    display:flex;
    // color:white;
    height:25px;
    // flex-shrink:0;
    > * {
        border:none;
    }
`;

const Sjobkanbutton = styled.button` //ジョブカンボタンのスタイル
    height:100%;
    background-color:transparent;
    padding:0px 25px 0px 25px;
    cursor:pointer;
    border-right:0.5px solid gray;
    font-size:11px;
    color:#FFFFFF;
    &:hover{
      color:white;
      background-color:black;
    }
`;

const SheadButton = styled.button` //ジョブカン以外のボタンのスタイル
    height:100%;
    padding:0px 25px 0px 25px;
    background-color:transparent;
    border-right:0.5px solid gray;
    cursor:pointer;
    font-size:10px;
    color:#c0c0c0;
    &:hover{
      color:white;
      background-color:black;
    }
`;

const SheadLink = styled(Link)` //ジョブカン以外のボタンのスタイル
    display:flex;
    background-color:#1880FB;
    height:100%;
    padding:0px 25px 0px 25px;
    border-right:0.5px solid gray;
    cursor:pointer;
    font-size:10px;
    font-weight:600;
    color:#FFFFFF;
    align-items:center;
    text-decoration:none;
    &:hover{
      color:white;
      background-color:black;
    }
`;

/* ======================================================================== */  
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 
  //ジョブカンボタンを呼び出す関数
  export const JobkanButton =()=>{
    return <Sjobkanbutton>ジョブカン</Sjobkanbutton>
  };
  
  //その他ボタンを呼び出す関数
  export const HeadButton =(props)=>{
    return <SheadButton>{props.label}</SheadButton>
  };

  //勤怠ボタンを呼び出す関数(ホーム用画面に画面遷移を行う)
export const KintaiButton =()=>{
  return(
  //   <SnaviLinkContainer>
      <SheadLink to="/">勤怠</SheadLink>
  //   </SnaviLinkContainer>
  )
};


/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 

//ウインドウが広い時のヘッダーを呼び出す関数
export const WideHeader = ()=>{
    return (
    <Shead>
        <JobkanButton />
        <KintaiButton />
        <HeadButton label="労務" />
        <HeadButton label="給与" />
        <HeaderDropDown />
    </Shead>
    )
};




// import React from "react";
// import styled from "styled-components";


/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

// const SnaviLinkContainer = styled.div`
// // padding: 50px;
// // margin: -50px; 
// `;

//   const SnaviButton = styled.button` //ボタンのスタイル  
//     background-color:#1880FB;
//     background-color:transparent;
//     padding:0px 25px 0px 25px;
//     cursor:pointer;
//     pointer-events:auto;
//     height:100%;
//     border:none;
//     border-right:0.5px solid gray;
//     font-size:10px;
//     color:#FFFFFF;
    
//   `;

// /* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
