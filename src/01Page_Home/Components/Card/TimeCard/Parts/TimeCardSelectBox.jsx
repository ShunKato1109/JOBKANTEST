import React from "react";
import styled from "styled-components";
import { useState } from "react";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
export const SselectBoxDiv = styled.div` // セレクトボックス関数全体を囲うスタイル
    display:flex;
    justify-content:center;
`;

export const SselectBoxSelect = styled.select` //セレクトスタイル
    width:100%;
    height:30px;
    margin-bottom:10px;
    padding:5px;
`;

/* ======================================================================== */  
/* ============================== Arry ==================================== */  
/* ======================================================================== */ 
//セレクトボックス内の選択肢の配列
    const options = [
        '㈱レイヴン BeコネクティッドG',
        '㈱レイヴン PM/PMO事業部',
        '㈱レイヴン',
    ];

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
//セレクトボックスを呼び出す関数
export const TimeCardSelectBox = ()=>{
    const [selectedItem,setSelectedItem] = useState('');

    //セレクトボックスをクリックで更新する
    const selectChange =(event) => {
        setSelectedItem(event.target.value);
        
    };

    return (
        <SselectBoxDiv>
            <SselectBoxSelect value={selectedItem} onChange={selectChange}>
                <option value="">㈱レイヴン BeコネクティッドG</option>
                {options.map((name)=>(
                    <option value={name}>{name}</option>
                ))}
            </SselectBoxSelect>
        </SselectBoxDiv>
    )
};