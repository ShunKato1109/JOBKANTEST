import React from "react";
import styled from "styled-components";
import { SidebarDropDown } from "./SidebarDropDown";
import {SlCalender} from "react-icons/sl";
import {TbClockEdit} from "react-icons/tb";
import {BsGear} from "react-icons/bs";
import {HiWrenchScrewdriver} from "react-icons/hi2";
import {PiNotePencilDuotone} from "react-icons/pi";

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

//関数SideBarButton(props icon,label)
export const SideBarButton =(props)=>{
  return <SsideButton>{props.icon}　{props.label}</SsideButton>
};

// Button Style
export const ScancelButton = styled.button`
  background-color:transparent;
  color:black;
  font-size:30px;
  height:40px;
  width:240px;
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
      <SideBarButton icon=<SlCalender /> label="出勤簿"/>
      <SideBarButton icon=<TbClockEdit /> label="打刻修正"/>
      <SidebarDropDown icon=<HiWrenchScrewdriver />  label="工数管理" list1="工数管理" list2="工数かんたん入力設定" />
      <SidebarDropDown icon=<PiNotePencilDuotone /> label="申請" list1="休暇申請" list2="休日出勤申請" />
      <SideBarButton icon=<BsGear /> label="スタッフ設定"/>
    </SsidebarAside>
  )
};