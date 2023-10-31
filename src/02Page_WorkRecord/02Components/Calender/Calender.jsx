import React from "react";
import styled from "styled-components";


/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const Sdiv = styled.div`
    margin:0px 13px 0px 13px;
    border-radius:5px; //機能してない
    font-size:13px;
    font-weight:500;
`;

const Stable = styled.table` // テーブル全体のスタイル
border-collapse: collapse;

width: 100%;
`;

const Sth = styled.th` //テーブルヘッダーセルのスタイル
    padding:3.25px 9.75px 3.25px 9.75px;
    border: 1px solid #ADADAD;
    
    font-size:13px;
    background-color:#E6E6E6;
`;

const Std = styled.td` //テーブルセルのスタイル
    padding:3.25px 9.75px 3.25px 9.75px;
    border: 1px solid #ADADAD;

`;

/* ====== Arry ====== */
//テーブルヘッダーの配列
const tableHead =[
    "日付",
    "休日区分",
    "出勤時刻",
    "退勤時刻",
    "労働時間",
    "残業時間",
    "深夜時間",
    "休憩時間",
    "有給時間",
    "勤怠状況",
];

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 


/* ====== Helper Components ====== */
//日付の表示形式を制御する関数
const formatDate = (date) => {
    const monthDay = date.toLocaleDateString('ja-JP', { month: '2-digit', day: '2-digit' });
    const weekday = date.toLocaleDateString('ja-JP', { weekday: 'short' });
    return `${monthDay}(${weekday})`;
  };

// 指定された日付の範囲内で日付の配列を生成する関数
const generateDates = (start,end)=>{
    const dateArry =[];
    let currentDate = start;

    while(currentDate<=end){
        dateArry.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() +1);
    }
    return dateArry;
};

// 指定された日付に対するテーブル行のボディデータを生成する関数
const generateTableBodyForRow = (date) => {
    return [
        formatDate(date),
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];
};

//カレンダーのヘッダーセルを呼び出す関数(=>配列tableHead)
const CalenderHead = (props)=>{
    return <Sth>{props.headlabel}</Sth>
};

//カレンダーのボディセルを呼び出す関数(=>)
const CalenderBody = (props)=>{
    return <Std>{props.tablelabel}</Std>
};



/* ====== Components ====== */
//カレンダーを全体を呼び出すメイン関数
const startDate = new Date(2023,9,1);
const endDate = new Date(2023,9,31);
const dates = generateDates(startDate,endDate);

export const Calender = ()=>{
    return(
        <Sdiv>
        <Stable>
            <thead>
             <tr>
              {tableHead.map(label=><CalenderHead headlabel={label}/>)}
             </tr>
            </thead>
            <tbody>
            {dates.map(date => (
          <tr key={date.toISOString()}>
            {generateTableBodyForRow(date).map(label=><CalenderBody tablelabel={label}/>)}
          </tr>
        ))}
            </tbody>
        </Stable>
        </Sdiv>
    )
};

