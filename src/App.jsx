import React from "react";
import styled from "styled-components";
import { ResponsiveHeader } from "./Compornents/ResponsiveHeader1/ResponsiveHeader1";
import { Header2} from "./Compornents/Header2/Header2";
import { SideBar} from "./Compornents/SideBar/SideBar";
import { TimeCard } from "./Compornents/TimeCardContents/TimeCard";
import { CardBody } from "./Compornents/Card/CardBody";
import { BodyHooter } from "./BodyHooter";


const Smain = styled.main`
  display:flex;
  height:100vh;
  width:100%;
  background-color:#F7F7F7;
`;

const SbodyDiv = styled.div`
  background-color:#F7F7F7;
  max-width:1110px;
  min-width:696px;
  position:relative;
  padding-left:15px;
  padding-right:15px;
`;

export const App = () =>{
  return (
    
    
    <div style={{height:'100vh'}}>

    {/* ヘッダー */}
    <ResponsiveHeader />
    <Header2 />

    {/* ボディdiv */}
    <Smain >

    {/* サイドバー */}
    <SideBar />

    {/* メインコンテンツ */}
    <SbodyDiv>
      <TimeCard />
      <CardBody />
      <BodyHooter />
    </SbodyDiv>

    </Smain>


    </div>
    
  );
}

export default App;