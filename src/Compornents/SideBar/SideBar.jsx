import React,{useState} from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { SidebarDropDown } from "./SidebarDropDown";
import {SlCalender} from "react-icons/sl";
import {TbClockEdit} from "react-icons/tb";
import {BsGear} from "react-icons/bs";
import {HiWrenchScrewdriver} from "react-icons/hi2";
import {PiNotePencilDuotone} from "react-icons/pi";

//Style Sidebar
export const SsidebarAside = styled.aside`
  width:${props =>(props.isOpen ? '240px': '0px')};
  height:100vh;
  text-align:right;
  background-color:#e0e0e0;
`;

// Style Button 
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

//Component SideBarButton
export const SideBarButton =(props)=>{
  return <SsideButton>{props.icon}　{props.label}</SsideButton>
};

// Component NavigateButton(=>AttendRecordPage)
export const NavigateButton = (props) => {
  return (
    <Link to="/attendrecord-page">
      <SsideButton>{props.icon}　{props.label}</SsideButton>
    </Link>
  );
};


// Style CancelButton
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

  const [isOpen,setIsOpen] = useState(true);

  const toggleSidebar =()=>{
    setIsOpen(!isOpen);
  };

  return (
  <ScancelButton onClick={toggleSidebar}>×</ScancelButton>
  )
};

// SidebarCompornent
export const SideBar = ()=>{
  const [isOpen, setIsOpen] = useState(true);

  return(
    <SsidebarAside isOpen={isOpen}>
      <CancelButton />
      <NavigateButton icon=<SlCalender /> label="出勤簿"/>
      <SideBarButton icon=<TbClockEdit /> label="打刻修正"/>
      <SidebarDropDown icon=<HiWrenchScrewdriver />  label="工数管理" list1="工数管理" list2="工数かんたん入力設定" />
      <SidebarDropDown icon=<PiNotePencilDuotone /> label="申請" list1="休暇申請" list2="休日出勤申請" />
      <SideBarButton icon=<BsGear /> label="スタッフ設定"/>
    </SsidebarAside>
  )
};