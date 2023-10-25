import React from "react";
import styled from "styled-components";
import { AccountCard } from "./Parts/AccountCard";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const Sdiv = styled.div`// アカウント情報関数全体を囲うスタイル
    margin:13px 0px 13px 0px;
`;

const Sdiv1 = styled.div`// ユーザー情報・基本項目を囲うスタイル
    display:flex;
`;

const Sdiv2 = styled.div`// 労働時間・休暇残数・消化休暇数を囲うスタイル

`;

/* ====== Arry ====== */
// ユーザー情報内のテキスト配列
const userInfo = [
    {lefttext:"年月",righttext:"2023年10月"},
    {lefttext:"スタッフコード",righttext:"rv230009"},
    {lefttext:"所属グループ",righttext:"㈱レイヴン->PM/PMO事業部->BeコネクティッドG"},
    {lefttext:"所定労働日数",righttext:"21 日"},
];

const basictopics = [
    {lefttext:"実働日数",righttext:"20"},
    {lefttext:"平日出勤日数",righttext:"20"},
    {lefttext:"休日出勤日数",righttext:"0"},
    {lefttext:"欠勤日数",righttext:"0"},
    {lefttext:"遅刻回数",righttext:"0"},
    {lefttext:"早退回数",righttext:"0"},
];

/* ====== Components ====== */
// アカウント情報の範囲を呼び出す関数
export const AccountInfo= ()=>{
    return(
        <Sdiv>
            <Sdiv1>
                <AccountCard arry={userInfo} headlabel="ユーザー情報"/>
                <AccountCard arry={basictopics} headlabel="基本項目"/>
            </Sdiv1>

            <Sdiv2>労働時間・休暇残数・消化休暇数を囲うスタイル</Sdiv2>
        </Sdiv>
    )
};
