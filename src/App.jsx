import React, { Component } from "react";
import styled from "styled-components";
import { HeadButton1,HeadButton2 } from "./Conpornents/Header1";
import { Sheader1 ,SfirstRowItem,SsecondRowItem,SthirdRowItem } from "./Conpornents/Header1";
import { Sheader2 } from "./Conpornents/Header2";
import { SidebarAside } from "./Conpornents/SideBar";
import { SideBarButton } from "./Conpornents/SideBar";

//CancelButton Css
export const ScancelButton={
  color:'black',
  fontSize:'30px',
  height:'40px',
  alignItems:'center',
  textAlign:"right",
  backgroundColor:'transparent',
  border:'none',
  cursor:'pointer',
};

//CancelButton関数
export const CancelButton = ()=>{
  return <button style={ScancelButton}>×</button>
};

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
    {/* ヘッダー１　ドロップダウンあり */}
    <Sheader1>
      <SfirstRowItem>
        <HeadButton1 label="ジョブカン" />
      </SfirstRowItem>
      <SsecondRowItem>
        <HeadButton2 label="勤怠" />
        <HeadButton2 label="労務" />
        <HeadButton2 label="給与" />
        {/* <HeadButton1 style={{marginLeft:'auto',color:'red'}} label="まだ作成できてない" /> */}
        <HeadButton1 style={{marginLeft:'auto'}}>まだ</HeadButton1>
        </SsecondRowItem>
        {/* <SthirdRowItem>
        <HeadButton1 label="まだ作成できてない" />
        </SthirdRowItem> */}
    </Sheader1>

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
    <SidebarAside>
      <CancelButton />
      <SideBarButton label="出勤簿"/>
      <SideBarButton label="打刻修正"/>
      <SideBarButton label="工数管理"/>
      <SideBarButton label="申請"/>
      <SideBarButton label="スタッフ設定"/>
    </SidebarAside>

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