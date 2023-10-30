import React from "react";
import styled from "styled-components";


/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const Sdiv = styled.div`
    margin:0px 13px 0px 13px;
    // background-color:black;
    
`;

const Stable = styled.table` // テーブル全体のスタイル
border-collapse: collapse;
width: 100%;
`;

const Sth = styled.th` //テーブルヘッダーセルのスタイル
    padding:3.25px 9.75px 3.25px 9.75px;
    border: 1px solid #333333;
    font-size:13px;

`;

const Std = styled.td` //テーブルセルのスタイル

`;

/* ====== Arry ====== */

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



/* ====== Components ====== */
//カレンダーを全体を呼び出すメイン関数
export const Calender = ()=>{


    const startDate = new Date(2023,9,1);
    const endDate = new Date(2023,9,31);

    const generateDates = (start,end)=>{
        const dateArry =[];
        let currentDate = start;

        while(currentDate<=end){
            dateArry.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() +1);
        }
        return dateArry;
    };

    const dates = generateDates(startDate,endDate);


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
            <Std>{date.toLocaleDateString()}</Std>
            <Std>{date.toLocaleDateString('en-US', { weekday: 'short' })}</Std>
          </tr>
        ))}
            </tbody>
        </Stable>
        </Sdiv>
    )
};

//カレンダーのヘッダーセルを呼び出す関数(=>配列tableHead)
 const CalenderHead = (props)=>{
    return <Sth>{props.headlabel}</Sth>
};
