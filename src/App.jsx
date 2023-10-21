import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import { SideBar} from "./Compornents/SideBar/SideBar";
import { TimeCard } from "./Compornents/TimeCardContents/TimeCard";
import { CardBody } from "./Compornents/Card/CardBody";
import { HeaderBody } from "./Compornents/Header/HeaderBody";
import { HooterBody } from "./Compornents/Hooter/HooterBody";
import { AttendRecordPage } from "./AttendRecordPage";

const App = ()=>{
  return(
  <BrowserRouter>
    <Routes>
    <Route path="/attendrecord-page" element={<AttendRecordPage />} />
    <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
};

const Smain = styled.main`
  display:flex;
  flex-direction: column;
  height:100vh;
  width:100%:
  background-color:#F7F7F7;
`;

const SbodyDiv = styled.div`
  // background-color:#F7F7F7;
  width:100%;
  max-width:1110px;
  min-width:696px;
  padding-left:15px;
  padding-right:15px;
`;

export const Home = () =>{
  return (

    <div style={{height:'100vh',minWidth:'500px',position:'relative'}}>

    {/* ヘッダー */}
      <HeaderBody />


    {/* ボディdiv */}
      <Smain >
      
        <div style={{display:'flex'}}>
          {/* サイドバー */}
    
      <SideBar />
    
    {/* メインコンテンツ */}
          <SbodyDiv>
            <TimeCard />
            <CardBody />
          </SbodyDiv>

        </div>

        <HooterBody />
    </Smain>

    </div>    
  );
}

export default App;