import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const SdropDownDiv = styled.div`
position:relative;
display:inline-block;
`;

export const SdropDownButton = styled.button`
color:white;
border:none;
display:flex;
font-size:10px;
    margin-left:auto;
    padding-left:10px;
    padding-right:10px;
    cursor:pointer;
    height:100%;
    border-left:0.5px solid gray;

background-color:transparent;
cursor:pointer`;

const SdropdownContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  a:hover {
    background-color: #f1f1f1;
  }
`;


  //Header button3 css
  export const SdropDown={
    fontSize:'10px',
    marginLeft:'auto',
    paddingLeft:'10px',
    paddingRight:'10px',
    cursor:'pointer',
    height:'100%',
    borderLeft:'0.5px solid gray',
  };

export const HeaderDropDown = ()=>{
    const[show,setShow] = useState(false);

    return (
        <SdropDownDiv>
            <SdropDownButton style={{SdropDown}} onClick={()=>setShow(!show)}>アカウント</SdropDownButton>
            <SdropdownContent show={show}>
                <a href="#">パスワード変更</a>
                <a href="#">ログアウト</a>
            </SdropdownContent>
        </SdropDownDiv>
    );
};