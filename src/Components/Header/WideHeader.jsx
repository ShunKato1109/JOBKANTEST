import React from "react";
import styled from "styled-components";
import { HeaderDropDown } from "./Parts/HeaderDropDown";
import { KintaiButton } from "./Parts/HeaderNaviBtn";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
const Shead = styled.header` //ヘッダー全体を囲うスタイル
    background-color:#242E33;
    display:flex;
    color:white;
    height:25px;
    flex-shrink:0;
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
