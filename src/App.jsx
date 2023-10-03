import React, { Component } from "react";
import styled from "styled-components";
import './App.css';

//header1
export const Sheader1 = styled.header`
background-color:#222222;
display:flex;
align-items:strech;
color:white;
height:25px;
`;

//header1 button css
export const SheadButton1={
  color:'#c0c0c0',
  backgroundColor:'transparent',
  fontSize:'70%',
  fontWeight:'bold',
  paddingLeft:'25px',
  paddingRight:'25px',
  cursor:'pointer',
  border:'none',
  borderRight:'0.5px solid gray',
};

//header1 button
export const HeadButton1 =(props)=>{
  return <button style={SheadButton1}>{props.label}</button>
};

//header2
export const Sheader2 = styled.header`
background-color:#30B2D6;
color:white;
height:80px;
display: flex;
align-items:center;
`;

//header button2 css
const SheadButton2={
  color:'#c0c0c0',
  backgroundColor:'transparent',
  fontSize:'60%',
  paddingLeft:'25px',
  paddingRight:'25px',
  cursor:'pointer',
  border:'none',
  borderRight:'0.5px solid gray',
};

//header button2
export const HeadButton2 =(props)=>{
  return <button style={SheadButton2}>{props.label}</button>
};

//sidebar div
export const SidebarDiv = styled.div`
width:240px;
height:100vh;
text-align:right;
background-color:#e0e0e0;
`;

//SidedBar css
export const SsideBar={
  color:'black',
  height:'40px',
  width:'100%',
  textAlign:"left",
  // backgroundColor:'transparent',
  border:'none',
  padding:'10px',
  cursor:'pointer',
};

export const SideBarButton =(props)=>{
  return <button style={SsideBar}>★ {props.label}</button>
};

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

export const CancelButton = ()=>{
  return <button style={ScancelButton}>×</button>
};


export const App = () =>{
  return (
    <>
    {/* ヘッダー１　ドロップダウンあり */}
    <Sheader1>
      <div style={{display:'flex'}}>
        <HeadButton1 label="ジョブカン"></HeadButton1>
        <HeadButton2 label="勤怠"></HeadButton2>
        <HeadButton2 label="労務"></HeadButton2>
        <HeadButton2 label="給与"></HeadButton2>
      </div>
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

    {/* サイドバー */}
    <SidebarDiv>
      <CancelButton />
      <SideBarButton label="出勤簿"/>
      <SideBarButton label="打刻修正"/>
      <SideBarButton label="工数管理"/>
      <SideBarButton label="申請"/>
      <SideBarButton label="スタッフ設定"/>
    </SidebarDiv>

    {/* メインコンテンツ */}
    <main></main>

    {/* フッター */}
    <hooter></hooter>

    </>
    
  );
}

export default App;