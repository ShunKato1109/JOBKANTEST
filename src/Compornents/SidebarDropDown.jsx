import React from "react";
import styled from "styled-components";
import { useState } from "react";

// SidebarDropDownDiv Style
export const SdropDownDiv = styled.div`
width:100%;
position:relative;
display:inline-block;
`;

//  SidebarDropDownButton Style
export const SdropDownButton = styled.button`
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

// SidebarDropDownContentDiv Style
const SdropdownContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  font-size:12px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 230px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  right:10px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;

  a {
    color: #c1;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    height:15px;

  }

  a:hover {
    background-color: #f1f1f1;
  }
`;

// 関数HeaderDropDown
// props 2つ以上渡してリスト内の文字もprops化する
export const SidebarDropDown = ()=>{
    const[show,setShow] = useState(false);

    return (
        <SdropDownDiv>
            <SdropDownButton onClick={()=>setShow(!show)}>アカウント</SdropDownButton>
            <SdropdownContent show={show}>
                <a href="#">パスワード変更</a>
                <a href="#">ログアウト</a>
            </SdropdownContent>
        </SdropDownDiv>
    );
};