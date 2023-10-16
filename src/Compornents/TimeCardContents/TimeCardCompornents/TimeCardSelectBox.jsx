import React from "react";
import styled from "styled-components";
import { useState } from "react";

// SelectBoxDiv Style
export const SselectBoxDiv = styled.div`
    display:flex;
    justify-content:center;
`;

export const SselectBoxSelect = styled.select`
    width:383.88px;
    height:30px;
    margin-bottom:10px;
    padding:5px;
`;

export const TimeCardSelectBox = ()=>{
    const [selectedItem,setSelectedItem] = useState('');
    
    const options = [
        '㈱レイヴン BeコネクティッドG',
        '㈱レイヴン PM/PMO事業部',
        '㈱レイヴン',
    ];

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