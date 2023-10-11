import React from "react";
import styled from "styled-components";
import { SidebarDropDown } from "./SidebarDropDown";

//SideBar Style
export const SsidebarAside = styled.aside`
  width:240px;
  height:100vh;
  text-align:right;
  background-color:#e0e0e0;
`;

// Button Style
export const SsideButton = styled.button`
  background-color:transparent;
  color:black;
  height:40px;
  width:100%;
  text-align:left;
  border:none;
  cursor:pointer;
  padding:10px;
  &:hover{
  background-color:#c0c0c0;
  };
`;

//関数SideBarButton
export const SideBarButton =(props)=>{
  return <SsideButton>★ {props.label}</SsideButton>
};

// Button Style
export const ScancelButton = styled.button`
  background-color:transparent;
  color:black;
  font-size:30px;
  height:40px;
  text-align:right;
  border:none;
  cursor:pointer;
`;

//関数CancelButton
export const CancelButton = ()=>{
  return <ScancelButton>×</ScancelButton>
};

// SidebarCompornent
export const SideBar = ()=>{
  return(
    <SsidebarAside>
      <CancelButton />
      <SideBarButton label="出勤簿"/>
      <SideBarButton label="打刻修正"/>
      <SideBarButton label="工数管理"/>
      <SideBarButton label="申請"/>
      <SideBarButton label="スタッフ設定"/>
      <SidebarDropDown />
    </SsidebarAside>
  )
};