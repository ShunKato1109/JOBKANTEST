import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Link } from 'react-router-dom';

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

const SnaviLinkContainer = styled.div`
// padding: 50px;
// margin: -50px; 
`;

  const SnaviButton = styled.button` //ボタンのスタイル  
    background-color:#1880FB;
    // background-color:transparent;
    padding:0px 25px 0px 25px;
    cursor:pointer;
    pointer-events:auto;
    height:100%;
    border:none;
    border-right:0.5px solid gray;
    font-size:10px;
    color:#FFFFFF;
    
  `;

//   const SheadButton = styled.button` //ジョブカン以外のボタンのスタイル
//     height:100%;
//     padding:0px 25px 0px 25px;
//     background-color:transparent;
//     border-right:0.5px solid gray;
//     cursor:pointer;
//     font-size:10px;
//     color:#c0c0c0;
//     &:hover{
//       color:white;
//       background-color:black;
//     }
// `;

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
//勤怠ボタンを呼び出す関数(ホーム用画面に画面遷移を行う)
export const KintaiButton =()=>{
    return(
      <SnaviLinkContainer>
        <Link to="/">
            <SnaviButton>勤怠</SnaviButton>
        </Link>
      </SnaviLinkContainer>
    )
};