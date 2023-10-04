import React from "react";
import styled from "styled-components";

//sidebar div
export const SidebarAside = styled.aside`
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

//SideBarButton関数
export const SideBarButton =(props)=>{
  return <button style={SsideBar}>★ {props.label}</button>
};