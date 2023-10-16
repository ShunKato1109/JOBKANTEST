import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const SdropDownDiv = styled.div`
margin-left:auto;
position:relative;
display:inline-block;
`;

export const SdropDownButton = styled.button`
    color:#c0c0c0;
    border:none;
    font-size:10px;
    padding-right:20px;
    height:100%;
    background-color:transparent;
    cursor:pointer
`;

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

export const HeaderDropDown = ()=>{
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