import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import { SideBar} from "./Components/SideBar/SideBar";
import { TimeCard } from "./01Page_Home/Components/Card/TimeCard/TimeCard";
import { CardBody } from "./01Page_Home/Components/Card/CardBody";
import { HeaderBody } from "./Components/Header/HeaderBody";
import { HooterBody } from "./Components/Hooter/HooterBody";
import WorkRecordPage from "./02Page_WorkRecord/Page_WorkRecord";

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

const Sdiv = styled.div`
  height:100vh;
`;

const Smain = styled.main`
  display:flex;
  flex-direction: column;
  width:100%:
  background-color:#F7F7F7;
`;

const SbodyDiv = styled.div`
  width:100%;
  max-width:1110px;
  min-width:696px;
  padding-left:15px;
  padding-right:15px;
`;



export const Home = () =>{
  return (

    <Sdiv>

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

    </Sdiv>    
  );
}

export default App;