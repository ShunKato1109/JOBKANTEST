import React from "react";
import styled from "styled-components";


export const Sheader2 = styled.header`
  background-color:#30B2D6;
  color:white;
  height:80px;
  display: flex;
  align-items:center;
`;

export const Header2 = ()=>{
  return(
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
  )
};
