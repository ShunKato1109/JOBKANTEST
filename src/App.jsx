import React, { Component } from "react";
import styled from "styled-components";
import './App.css';

export const App = () =>{

  const StyledHead1 = styled.header`
  background-color:#222222;
  display:flex;
  align-items:center;
  color:white;
  height:25px;
  `;

  const HeadButton =(props)=>{
    const headButtonStyle={
      color:'white',
      backgroundColor:'transparent',
      fontSize:'50%',
      paddingLeft:'25px',
      paddingRight:'25px',
      cursor:'pointer',
      border:'none',
      borderRight:'1px solid gray',
      borderLeft:'1px solid gray',
    };
    return <button style={headButtonStyle}>{props.label}</button>
  }

  const StyledHead2 = styled.header`
  background-color:#30B2D6;
  color:white;
  display: flex;
  align-items:center;
  height:80px;
  `;

  const ContainerDiv = styled.div`
  display: flex;
  align-items: baseline;
  `;


  return (
    <>
    {/* ヘッダー１　ドロップダウンあり */}
    <StyledHead1>
      <div style={{display:'flex',alignItems:'center'}}>
        <p style={{padding:'10px',fontSize:'50%',fontWeight:'bold'}}>ジョブカン</p>
        <HeadButton label="勤怠"></HeadButton>
        <HeadButton label="労務"></HeadButton>
        <HeadButton label="給与"></HeadButton>
      </div>
    </StyledHead1>

    {/* ヘッダー２　ジョブカン */}
    <StyledHead2>
        <ContainerDiv>
        <p style={{fontSize:'200%',fontWeight:'bold'}}>ジョブカン</p>
        <p style={{fontSize:'50%'}}>勤怠管理</p>
        </ContainerDiv>
        <div style={{marginLeft:'auto',marginRight:'20px',textDecoration:'underline',lineHeight:'1'}}>
        <p style={{fontSize:'25%',}}>加藤舜涼さん</p>
        <p style={{fontSize:'25%'}}>スタッフコード(rv230009)</p>
        </div>
    </StyledHead2>

    {/* サイドバー */}
    <aside></aside>

    {/* メインコンテンツ */}
    <main></main>

    {/* フッター */}
    <hooter></hooter>

    </>
    
  );
}

export default App;