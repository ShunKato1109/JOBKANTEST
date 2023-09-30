import React, { Component } from "react";
import styled from "styled-components";
import './App.css';

export const App = () =>{

  const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: left;
  width: 100%;
  
  `;

  const StyledHead1 = styled.header`
  background-color:black;
  color:white;
  `;

  const StyledHead2 = styled.header`
  background-color:#30B2D6;
  color:white;
  `;


  return (
    <>
    {/* ヘッダー１　ドロップダウンあり */}
    <StyledHead1>
      <div>
        <p>ヘッダー１</p>
      </div>
    </StyledHead1>

    {/* ヘッダー２　ジョブカン */}
    <StyledHead2>
      <StyleDiv>
        <div className="container">
        <p style={{fontSize:'36px'}}>ジョブカン</p>
        <p style={{fontSize:'18px'}}>勤怠管理</p>
        </div>
        <div className="right-item">
        <p >加藤舜涼さん</p>
        <p >スタッフコード</p>
        </div>
      </StyleDiv>
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