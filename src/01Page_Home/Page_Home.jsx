import React from "react";
import styled from "styled-components";
import { HeaderBody } from "../Components/Header/HeaderBody";
import { SideBar } from "../Components/SideBar/SideBar";
import { TimeCard } from "./TimeCard";
import { CardBody } from "./CardBody";
import { FooterMain } from "../Components/Footer/FooterMain";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const ShomeWindow = styled.div` //Window全体を囲うスタイル
  display:flex;
  flex-direction:column;
  height:100vh;
  background-color:#F7F7F7;
`;

const Sdiv = styled.main` //ヘッダーより下部を囲うスタイル
  display:flex;
  height:100vh;
  width:100%;
`;

const SmainBody = styled.div` //MainBody関数全体を囲うスタイル
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
`;

const SBodyParts = styled.div` //MainBodyスタイル内の時計とお知らせを囲うスタイル
  width:100%;
  max-width:1110px;
  min-width:696px;
  padding-left:15px;
  padding-right:15px;
`;


/* ======================================================================== */  
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 
// メインボディを呼び出す関数(時計・お知らせ・フッター)
export const MainBody = ()=>{
  return(
  <SmainBody>
    <SBodyParts>
      <TimeCard />
      <CardBody />
    </SBodyParts>
    <FooterMain />
  </SmainBody>
  )
};


/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 


/* ======================================================================== */  
/* =============================== Main =================================== */  
/* ======================================================================== */ 
/* ====== PageComponents ====== */
//ホーム用のページを呼び出す関数
export const Home = () =>{
  return (
    <ShomeWindow>
      <HeaderBody />
      <Sdiv >
          <SideBar />
          <MainBody />          
      </Sdiv>
    </ShomeWindow>    
  );
}


