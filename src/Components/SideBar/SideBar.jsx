import React,{useState} from "react";
import styled from "styled-components";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { SidebarDropDown } from "./SidebarDropDown";
import {SlCalender} from "react-icons/sl";
import {TbClockEdit} from "react-icons/tb";
import {BsGear} from "react-icons/bs";
import {HiWrenchScrewdriver} from "react-icons/hi2";
import {PiNotePencilDuotone} from "react-icons/pi";
import { LanguageSelectBox } from "./SideBarSelectBox";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 


export const SsidebarAside = styled.aside` //開いているときのサイドバーのスタイル
  display:flex;
  flex-direction:column;
  width:240px;
  height:100%;
  text-align:right;
  background-color:#e0e0e0;
`;

export const ScloseSideBar = styled.aside` //閉じているときのサイドバーのスタイル
  width:48.19px;
  height:100vh;
  text-align:center;
  background-color:#e0e0e0;
`;

export const SsideButton = styled.button` //ボタンのスタイル
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


export const ScancelButton = styled.button` //キャンセルボタンのスタイル
  background-color:transparent;
  color:black;
  font-size:30px;
  height:40px;
  text-align:right;
  border:none;
  cursor:pointer;
`;


/* ======================================================================== */  
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 

//ボタンを呼び出す関数
export const SideBarButton =(props)=>{
  return <SsideButton>{props.icon}　{props.label}</SsideButton>
};

// 出勤簿に遷移するボタンを呼び出す関数
export const NavigateButton = (props) => {
  return (
    <Link to="/workrecord-page">
      <SsideButton>{props.icon}　{props.label}</SsideButton>
    </Link>
  );
};

//サイドバーの開閉を行うボタンを呼び出す関数
export const CancelButton = ({isOpen,toggleSidebar,label})=>{

  return (
  <ScancelButton onClick={toggleSidebar}>{label}</ScancelButton>
  )
};

// 開いているときのサイドバーを呼び出す関数
export const WideSideBar = ({isOpen,toggleSidebar,label})=>{
  return(
    <SsidebarAside isOpen={isOpen}>
    <CancelButton isOpen={isOpen} toggleSidebar={toggleSidebar} label="×"/>
    <NavigateButton icon=<SlCalender /> label="出勤簿"/>
    <SideBarButton icon=<TbClockEdit /> label="打刻修正"/>
    <SidebarDropDown icon=<HiWrenchScrewdriver />  label="工数管理" list1="工数管理" list2="工数かんたん入力設定" />
    <SidebarDropDown icon=<PiNotePencilDuotone /> label="申請" list1="休暇申請" list2="休日出勤申請" />
    <SideBarButton icon=<BsGear /> label="スタッフ設定"/>
    <LanguageSelectBox />
  </SsidebarAside>
  )
};

//閉じているときのサイドバーを呼び出す関数
export const CloseSideBar = ({isOpen,toggleSidebar, label})=>{
  return(
    <ScloseSideBar>
      <CancelButton isOpen={isOpen} toggleSidebar={toggleSidebar} label="三"/>
    </ScloseSideBar>
  )
};

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 


// サイドバーを呼び出すメイン関数(開閉ボタンを押すことで呼び出す関数が切り替わる)
export const SideBar = ()=>{
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar =()=>{
    setIsOpen(!isOpen);
  };

  return(
    <div>
      {isOpen ? <WideSideBar isOpen={isOpen} toggleSidebar={toggleSidebar}/> : <CloseSideBar isOpen={isOpen} toggleSidebar={toggleSidebar}/>}
    </div>
  )
};



