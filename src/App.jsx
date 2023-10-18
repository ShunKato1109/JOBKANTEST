import React from "react";
import styled from "styled-components";
import { SideBar} from "./Compornents/SideBar/SideBar";
import { TimeCard } from "./Compornents/TimeCardContents/TimeCard";
import { CardBody } from "./Compornents/Card/CardBody";
import { HeaderBody } from "./Compornents/Header/HeaderBody";
import { HooterBody } from "./Compornents/Hooter/HooterBody";


const Smain = styled.main`
  display:flex;
  flex-direction: column;
  height:100vh;
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