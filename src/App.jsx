import React, { Component } from "react";
import { ResponsiveHeader } from "./Compornents/ResponsiveHeader1";
import styled from "styled-components";
import { Sheader2 } from "./Compornents/Header2";
import { SideBar, SsidebarAside } from "./Compornents/SideBar";
import { SideBarButton } from "./Compornents/SideBar";
import { TimeCard } from "./Compornents/TimeCardContents/TimeCard";



//main内Div1
export const MainDiv1 = styled.div`
  background-color:yellow;
  margin-top:15px;
  margin-bottom:15px;
  margin-right:25px;
  margin-left:25px;
`;

//MainDiv1Header
export const MainDiv1Header = styled.div`
display:flex;
height:45px;
font-size:22px;
padding-left:20px;
background-color:#e0e0e0;
align-items:center;
`;

//main内Div2
export const MainDiv2 = styled.div`
  display:flex;
  background-color:blue;
  margin-bottom:15px;
  margin-right:25px;
  margin-left:25px;
`;


export const App = () =>{
  return (
    <>
    {/* ヘッダー1(画面サイズに応じてレイアウト変更のコンポーネント) */}
    <ResponsiveHeader />

    {/* ヘッダー２　ジョブカン */}
    <Sheader2>
        <div style={{display:'flex',alignItems:'baseline',marginLeft:'20px'}}>
        <p style={{fontSize:'210%',fontWeight:'bold'}}>ジョブカン</p>
        <p style={{fontSize:'80%'}}>勤怠管理</p>
        </div>
        <div style={{marginLeft:'auto',marginRight:'20px',textDecoration:'underline',lineHeight:'1'}}>
        <p style={{fontSize:'25%',}}>加藤舜涼さん</p>
        <p style={{fontSize:'25%'}}>スタッフコード(rv230009)</p>
        </div>
    </Sheader2>

    {/* ボディdiv */}
    <div style={{display:'flex'}}>

    {/* サイドバー */}
    <SideBar />

    {/* メインコンテンツ */}
    <main style={{backgroundColor:'red',flexGrow:'1'}}>
      <TimeCard />

      <MainDiv2>
        <div>やー</div>
        <div>やー</div>
      </MainDiv2>
    
    </main>

    </div>

    {/* フッター */}
    <hooter>
    <div style={{backgroundColor:'yellow'}}>hooter</div>
    </hooter>

    </>
    
  );
}

export default App;