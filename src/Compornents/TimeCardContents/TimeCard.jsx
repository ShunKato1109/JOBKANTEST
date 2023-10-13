import React from "react";
import styled from "styled-components";
import { TimeCardHeader } from "./TimeCardCompornents/TimeCardHeader";
import { Timer } from "./TimeCardCompornents/Timer";
import { TimeCardDropDown } from "./TimeCardCompornents/TimeCardDropDown";

// TimeCardDiv Style
export const StimecardDiv = styled.div`
  background-color:white;
  border-radius:3px;
  height:500px;
  margin-top:15px;
  margin-bottom:15px;
  margin-right:25px;
  margin-left:25px;
`;

//Main TimeCard Compornent
export const TimeCard = ()=>{
    return(
      <StimecardDiv>
        <TimeCardHeader />
        <Timer />
        <p>打刻場所を選択してください</p>
        <TimeCardDropDown label="ドロップダウン" list1="2" list2="3" />
      </StimecardDiv>
    )
};





{/* <main style={{backgroundColor:'red',flexGrow:'1'}}>
      
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
    
    </main> */}