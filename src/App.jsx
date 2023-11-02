import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import { SideBar} from "./Components/SideBar/SideBar";
import { TimeCard } from "./01Page_Home/Components/Card/TimeCard/TimeCard";
import { CardBody } from "./01Page_Home/Components/Card/CardBody";
import { HeaderBody } from "./Components/Header/HeaderBody";
import WorkRecordPage from "./02Page_WorkRecord/Page_WorkRecord";
import { FooterMain } from "./Components/Hooter/FooterMain";

const App = ()=>{
  return(
  <BrowserRouter>
    <Routes>
    <Route path="/workrecord-page" element={<WorkRecordPage />} />
    <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
};

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

/* ====== Components ====== */
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

export default App;
