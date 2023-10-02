import React, { Component } from "react";
import styled from "styled-components";
import './App.css';

export const App = () =>{

  const StyledHead1 = styled.header`
  background-color:#222222;
  display:flex;
  align-items:strech;
  color:white;
  height:25px;
  `;

  const HeadButton1 =(props)=>{
    const headButtonStyle={
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
    return <button style={headButtonStyle}>{props.label}</button>
  }

  const HeadButton2 =(props)=>{
    const headButtonStyle={
      color:'#c0c0c0',
      backgroundColor:'transparent',
      fontSize:'60%',
      paddingLeft:'25px',
      paddingRight:'25px',
      cursor:'pointer',
      border:'none',
      borderRight:'0.5px solid gray',
    };


    return <button style={headButtonStyle}>{props.label}</button>
  }

  const StyledHead2 = styled.header`
  background-color:#30B2D6;
  color:white;
  height:80px;
  display: flex;
  align-items:center;
  // align-items: baseline;
  `;

  const SidebarDiv = styled.div`
  width:240px;
  height:100vh;
  background-color:#e0e0e0;
  `;

  const SideButton1 = (props)=>{
    const sideBarStyle={
      color:'black',
      backgroundColor:'transparent',
      border:'none',
    };
    
    return <button style={sideBarStyle}>{props.label}</button>
  };

  const SideBarBox=(props)=>{
    return(
      <div style={{display:'flex',height:'50px',alignItems:'center'}}>
        <p style={{marginLeft:'15px'}}>印</p>
        <SideButton1 >{props.label}</SideButton1>
      </div>
    )
  };


  return (
    <>
    {/* ヘッダー１　ドロップダウンあり */}
    <StyledHead1>
      <div style={{display:'flex'}}>
        <HeadButton1 label="ジョブカン"></HeadButton1>
        <HeadButton2 label="勤怠"></HeadButton2>
        <HeadButton2 label="労務"></HeadButton2>
        <HeadButton2 label="給与"></HeadButton2>
      </div>
    </StyledHead1>

    {/* ヘッダー２　ジョブカン */}
    <StyledHead2>
        <div style={{display:'flex',alignItems:'baseline',marginLeft:'20px'}}>
        <p style={{fontSize:'210%',fontWeight:'bold'}}>ジョブカン</p>
        <p style={{fontSize:'80%'}}>勤怠管理</p>
        </div>
        <div style={{marginLeft:'auto',marginRight:'20px',textDecoration:'underline',lineHeight:'1'}}>
        <p style={{fontSize:'25%',}}>加藤舜涼さん</p>
        <p style={{fontSize:'25%'}}>スタッフコード(rv230009)</p>
        </div>
    </StyledHead2>

    {/* サイドバー */}
    {/* <aside></aside> */}
    <SidebarDiv>
      <SideBarBox label="出勤簿"/>
    </SidebarDiv>

    {/* メインコンテンツ */}
    <main></main>

    {/* フッター */}
    <hooter></hooter>

    </>
    
  );
}

export default App;