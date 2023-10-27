import React,{useState} from "react";
import styled from "styled-components";

// InputBox div Style
export const SinputBoxDiv = styled.div`
    display:flex;
    justify-content:center;
`;

// InputBox Style
export const SinputBoxInput = styled.input`
    width:100%;
    height:35px;
    padding:5px;
`;

export const TimeCardInputBox = ()=>{
    const[inputValue,setInputValue] = useState('');

    const InputChange =(event)=>{
            setInputValue(event.target.value);    
    };

    return(
        <SinputBoxDiv>
        <SinputBoxInput value={inputValue} onChange={InputChange} placeholder="備考"/>
        </SinputBoxDiv>
    )
};