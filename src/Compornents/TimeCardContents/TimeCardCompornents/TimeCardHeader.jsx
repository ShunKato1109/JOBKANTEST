import React from "react";
import styled from "styled-components";



//TimeCardHeaderDiv Style
export const StimecardHeader = styled.div`
  display:flex;
  height:45px;
  font-size:22px;
  padding-left:20px;
  background-color:#e0e0e0;
  align-items:center;
`;

// 関数TimeCardHeader
export const TimeCardHeader = ()=>{
  return(
    <StimecardHeader>
      <p>勤怠状況関数</p>
    </StimecardHeader>
  )
};