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
    position:relative;
    &::after{
      content:">";
      position:absolute;
      top:50%;
      right:10px;
      // transform: translateY(-50%);
    }

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
  width: auto;
  white-space:nowrap;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  left:230px;
  top:0px;
  border-radius:5px;

  a {
    color: black;
    text-align:left;
    font-weight:bold;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    height:10px;

  }

  a:hover {
    background-color: #f1f1f1;
  }
`;

// 関数HeaderDropDown(props icon,label,list1,list2)
export const SidebarDropDown = (props)=>{
    const[show,setShow] = useState(false);

    return (
        <SdropDownDiv>
            <SdropDownButton onClick={()=>setShow(!show)}>{props.icon}　{props.label}</SdropDownButton>
            <SdropdownContent show={show}>
                <a href="#">{props.list1}</a>
                <a href="#">{props.list2}</a>
            </SdropdownContent>
        </SdropDownDiv>
    );
};