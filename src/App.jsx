import React, { Component } from "react";
import { ResponsiveHeader } from "./Compornents/ResponsiveHeader1";
import styled from "styled-components";
import { Sheader2 } from "./Compornents/Header2";
import { SideBar, SsidebarAside } from "./Compornents/SideBar";
import { SideBarButton } from "./Compornents/SideBar";



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
      
      <MainDiv1>
        <MainDiv1Header>出勤/見出勤切り替え</MainDiv1Header>
        <p>タイマー</p>
        <p>打刻場所を選択してください</p>
        <p>プルダウン</p>
        <p>インプットボックス</p>
        <div style={{display:'flex'}}>
          <button>出勤</button>
          <button>休憩開始</button>
          <button>休憩終了</button>
          <button>退勤</button>
        </div>
        <div style={{display:'flex'}}>
          <p>通常モード押しボタン</p>
          <p>夜勤モード押しボタン</p>
        </div>
        <div style={{display:'flex'}}>
          <p>総計</p>
          <p>休憩</p>
          <p>残業</p>
          <p>深夜</p>
        </div>
      </MainDiv1>

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