import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Link } from 'react-router-dom';

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
  const SnaviButton = styled.button` //ボタンのスタイル  
    background-color:#1880FB;
    // background-color:transparent;
    padding:0px 25px 0px 25px;
    cursor:pointer;
    height:100%;
    border-right:0.5px solid gray;
    font-size:10px;
    color:#FFFFFF;
    border:none;
  `;

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
//勤怠ボタンを呼び出す関数(ホーム用画面に画面遷移を行う)
export const KintaiButton =()=>{
    return(
        <Link to="/">
            <SnaviButton>勤怠</SnaviButton>
        </Link>
    )
};