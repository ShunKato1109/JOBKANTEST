import React, { useState, useEffect } from 'react';
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
export const StimerDiv = styled.div` //時計の関数を囲うスタイル
font-size:96px;
text-align:center;
`;

/* ======================================================================== */  
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 
//時計を呼び出す関数
export const Clock = () => {
  
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      
      const timerId = setInterval(
        () => setCurrentTime(new Date()),
      );
  
      return () => clearInterval(timerId);
    }, []);
  
    // 時刻を00:00:00の形式にフォーマットする関数(currentTime=>time)
    const formatTime = (time) => {
      const hours = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');
      const seconds = time.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    };
  
    return (
      <div>
        {formatTime(currentTime)}
      </div>
    );
  };  

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
//時計ボックスを呼び出す関数
export const Timer = ()=>{
    return (
    <StimerDiv>
      <Clock />
    </StimerDiv>
    )
  };
  