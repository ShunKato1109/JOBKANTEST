import React from "react";
import styled from "styled-components";



//TimeCardHeader div Style
export const StimecardHeader = styled.div`
  display:flex;
  height:46.79px;
  font-size:22.75px;
  padding-left:20px;
  background-color:#E6E6E6;
  align-items:center;
  border-radius:5px 5px 0px 0px;
`;

// 関数TimeCardHeader
export const TimeCardHeader = ()=>{
  return(
    <StimecardHeader>
      <p>勤怠状況関数</p>
    </StimecardHeader>
  )
};