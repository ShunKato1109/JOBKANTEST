import React from "react";
import styled from "styled-components";
import { useState } from "react";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

export const SselectBox = styled.div` // セレクトボックス関数全体を囲うスタイル
    display:flex;
    justify-content:center;
    padding:13px 6.5px 13px 6.5px;
    margin-top:auto;
`;

export const Sselect = styled.select` // 選択ボックスを囲うスタイル
    width:100%;
    padding:3.25px 22.75px 3.25px 6.5px;
    font-size:12px;
`;

/* ======================================================================== */  
/* ============================== Arry ==================================== */  
/* ======================================================================== */ 

const options = [
    'English', 'Français', 'Español', 'Deutsch', 'Italiano', '中文', '한국어', 'Русский', 'Português', 'العربية', 'हिन्दी'
];

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 

//言語のセレクトボックスを呼び出す関数
export const LanguageSelectBox = ()=>{
    const [selectedItem,setSelectedItem] = useState('');
    
    const selectChange =(event) => {
        setSelectedItem(event.target.value);    
    };

    return (
        <SselectBox>
            <Sselect value={selectedItem} onChange={selectChange}>
                <option value="">日本語</option>
                {options.map((name)=>(
                    <option value={name}>{name}</option>
                ))}
            </Sselect>
        </SselectBox>
    )
};