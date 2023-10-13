import React from "react";
import styled from "styled-components";
import { useState } from "react";

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
        <div>
            <label>選択してください</label>
        </div>
    )
};