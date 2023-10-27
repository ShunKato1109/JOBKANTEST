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
    display:flex;
    margin:13px 0px 13px 0px;

`;

const Sdiv2sub = styled.div` //Sdiv2内を分割するためのスタイル
    flex:1;
    display:flex;
    flex-direction:column;
    
`;

/* ====== Arry ====== */
// ユーザー情報内のテキスト配列
const userInfo = [ 
    {lefttext:"年月",righttext:"2023年10月"},
    {lefttext:"スタッフコード",righttext:"rv230009"},
    {lefttext:"所属グループ",righttext:"㈱レイヴン->PM/PMO事業部->BeコネクティッドG"},
    {lefttext:"所定労働日数",righttext:"21 日"},
];
// 基本項目内のテキスト配列
const basictopics = [
    {lefttext:"実働日数",righttext:"20"},
    {lefttext:"平日出勤日数",righttext:"20"},
    {lefttext:"休日出勤日数",righttext:"0"},
    {lefttext:"欠勤日数",righttext:"0"},
    {lefttext:"遅刻回数",righttext:"0"},
    {lefttext:"早退回数",righttext:"0"},
];
// 労働時間内のテキスト配列
const worktime = [
    {lefttext:"実労働時間",righttext:""},
    {lefttext:"月規定労働時間",righttext:""},
    {lefttext:"実残業時間",righttext:""},
    {lefttext:"実深夜時間",righttext:""},
    {lefttext:"休日労働時間",righttext:""},
    {lefttext:"休日残業時間",righttext:""},
    {lefttext:"休日深夜時間",righttext:""},
    {lefttext:"みなし残業時間",righttext:""},
    {lefttext:"みなし外残業時間",righttext:""},
    {lefttext:"所定過不足計",righttext:""},
    
];
// 本日時点休暇残日数のテキスト配列
const vacationday= [
    {lefttext:"有休",righttext:""},
    {lefttext:"代休",righttext:""},
    {lefttext:"振休",righttext:""},
    {lefttext:"欠勤",righttext:""},
    {lefttext:"特休(有給)",righttext:""},
    {lefttext:"リプレイス",righttext:""},
    {lefttext:"フレッシュU",righttext:""},
    {lefttext:"特休(無給)",righttext:""},
    {lefttext:"エル休暇",righttext:""},
];
// 消化した休暇のテキスト配列
const usevacationday= [

];


/* ====== Components ====== */
// アカウント情報の範囲を呼び出す関数
export const AccountInfo= ()=>{
    return(
        <Sdiv>
            <Sdiv1>
                <AccountCard arry={userInfo} headlabel="ユーザー情報" />
                <AccountCard arry={basictopics} headlabel="基本項目"/>
            </Sdiv1>

            <Sdiv2>
                <Sdiv2sub>
                <AccountCard arry={worktime} headlabel="労働時間" />
                </Sdiv2sub>
                <Sdiv2sub>
                    <AccountCard arry={vacationday} headlabel="本日時点休暇残日数" />
                    <AccountCard arry={usevacationday} headlabel="消化した休暇" style={{marginTop:'13px'}}/>
                </Sdiv2sub>
            </Sdiv2>
        </Sdiv>
    )
};
