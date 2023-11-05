import React, { useState } from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
// Div Style
export const Sdiv = styled.div`
    display:flex;
    justify-content:center;
`;

// Style TimeCardButtonBox div 
export const StimeCardButtonBoxDiv = styled.div`
    display:flex;
    justify-content:space-between;
    padding-left:-15px;
    padding-right:-15px;
    height:35px;
    width:100%;
    margin-top:10px;
`;

// TimeCardButton button Style
export const StimeCardButton = styled.button`
    width:100%;
    height:30.58px;
    margin-right:15px;
    font-size:13px;
    justify-content:space-between;
    border-radius:5px ;
    border:none;
    cursor:pointer;
`;

/* ======================================================================== */  
/* ========================= Helper Components ============================ */  
/* ======================================================================== */ 
// ボタンを呼び出す関数
export const TimeCardButton =(props)=>{
    return(
        <StimeCardButton onClick={props.onClick} style={{...props.style, backgroundColor:props.backcolor ,color:props.fontcolor}}>
            {props.label}
        </StimeCardButton>
    )
};


export const TextContext = React.createContext({
    text: '',
    setText: () => {}
  });


/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
//ボタンボックスを呼び出す関数(props=>テキスト・フォント色・背景色)
export const TimeCardButtonBox =()=>{

    const [text,setText] = useState()

    //ボタンを押した際にtextを更新する関数
    const handleButtonClick = newText =>{
        setText(newText)
    };
    

    return(
        <TextContext.Provider value={{text,setText}}>
        <Sdiv>
        <StimeCardButtonBoxDiv>
            <TimeCardButton onClick={()=>handleButtonClick('出勤中')} label="出 勤" backcolor="#EB840B" fontcolor="white"/>
            <TimeCardButton onClick={()=>handleButtonClick('休憩中')} label="休憩開始" backcolor="#ADADAD" fontcolor="white"/>
            <TimeCardButton onClick={()=>handleButtonClick('出勤中')} label="休憩終了" backcolor="#ADADAD" fontcolor="white"/>
            <TimeCardButton onClick={()=>handleButtonClick('退勤中')} label="退 勤" backcolor="#30B2D6" fontcolor="white" style={{marginRight:0}}/>
        </StimeCardButtonBoxDiv>
        </Sdiv>
        </TextContext.Provider>
    )
};


  