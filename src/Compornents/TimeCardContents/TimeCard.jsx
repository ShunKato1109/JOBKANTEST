import React from "react";
import styled from "styled-components";
import { TimeCardHeader } from "./TimeCardCompornents/TimeCardHeader";
import { Timer } from "./TimeCardCompornents/Timer";
import { TimeCardSelectBox } from "./TimeCardCompornents/TimeCardSelectBox";
import { TimeCardInputBox } from "./TimeCardCompornents/TimeCardInputBox";
import { TimeCardButtonBox } from "./TimeCardCompornents/TimeCardButtonBox";
import { TimeCardRadioButtonBox } from "./TimeCardCompornents/TimeCardRadioButtonBox";

// TimeCardDiv Style
export const StimecardDiv = styled.div`
  max-width:1110px;
  background-color:white;
  border-radius:5px;
  height:436.21px;
  margin-top:15px;
  margin-bottom:15px;
  margin-right:13px;
  margin-left:13px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

// Div Style
export const Sdiv = styled.div`
  display:flex;
  justify-content:center;
`;

// P Style
export const StimeCardP = styled.p`
  width:383.88px;
  font-size:13px;
  margin-bottom:6.5px;
`;

//Main TimeCard Compornent
export const TimeCard = ()=>{
    return(
      <StimecardDiv>
        <TimeCardHeader />
        <Timer />
        <Sdiv><StimeCardP>打刻場所を選択してください</StimeCardP></Sdiv>
        <TimeCardSelectBox />
        <TimeCardInputBox />
        <TimeCardButtonBox />
        <TimeCardRadioButtonBox />
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