import React from "react";
import styled from "styled-components";
import { ResponsiveHeader } from "./Compornents/ResponsiveHeader1/ResponsiveHeader1";
import { Header2} from "./Compornents/Header2/Header2";
import { SideBar} from "./Compornents/SideBar/SideBar";
import { TimeCard } from "./Compornents/TimeCardContents/TimeCard";
import { CardBody } from "./Compornents/Card/CardBody";
import { BodyHooter } from "./BodyHooter";



// //main内Div1
// export const MainDiv1 = styled.div`
//   margin-top:15px;
//   margin-bottom:15px;
//   margin-right:25px;
//   margin-left:25px;
// `;



export const App = () =>{
  return (
    <div style={{height:'100vh'}}>

    {/* ヘッダー */}
    <ResponsiveHeader />
    <Header2 />

    {/* ボディdiv */}
    <div style={{display:'flex' ,height:'100vh' ,backgroundColor:'#e0e0e0'}}>

    {/* サイドバー */}
    <SideBar />

    {/* メインコンテンツ */}
    <main style={{backgroundColor:'#F7F7F7',flexGrow:'1'}}>
      <TimeCard />
      <CardBody />
      <BodyHooter />
    </main>

  

    </div>

    {/* フッター */}


    </div>
    
  );
}

export default App;