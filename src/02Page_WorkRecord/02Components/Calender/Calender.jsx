import React from "react";
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const Sdiv = styled.div`
    margin:0px 13px 0px 13px;
    border-radius:5px; //機能してない
`;

const Stable = styled.table` // テーブル全体のスタイル
    border-collapse: collapse;
    width: 100%;
    text-align:center;
`;

const Sth = styled.th` //テーブルヘッダーセルのスタイル
    background-color:#E6E6E6;
    padding:11px 4.5px 11px 4.5px;
    border: 1px solid #ADADAD;
    font-size:13px;
    font-weight:600;
`;

const Std = styled.td` //テーブルカレンダーセルのスタイル
    padding:11px 4.5px 11px 3.25px;
    border: 1px solid #ADADAD;  
    font-size:15px;
    font-weight:500;
    text-decoration:${props=>props.underline}
    // text-decoration:underline;
    // color:${props => props.color || 'inherit'};
    
`;

const Ssumtd = styled.td` //テーブル合計行のスタイル
    background-color:#E6E6E6;
    padding:11px 4.5px 11px 4.5px;
    border: 1px solid #ADADAD;
    font-size:13px;
    font-weight:550;
`;

const Sweekday = styled.span`
    color:${props =>props.color};
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

//カレンダーの合計行の配列
const tableSum = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 

/* ====== Helper Components ====== */
//公休日の記述
const WeekEnd = ({weekText})=>{
    return (
        <>{weekText}</>
    )
};


//日付の表示形式を制御する関数
const formatDate = (date,color) => {
    const monthDay = date.toLocaleDateString('ja-JP', { month: '2-digit', day: '2-digit' });
    const weekday = date.toLocaleDateString('ja-JP', { weekday: 'short' });
    return (
        <>
        {`${monthDay}(`}<Sweekday color={color}>{weekday}</Sweekday>{`)`}
        </>
    );
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
       //土日の場合、フォントの色を変更する
       const dayOfWeek = date.getDay();
       let weekText = null;
       if(dayOfWeek === 0 || dayOfWeek=== 6){
        weekText = <WeekEnd weekText ="公休" />
       }

    return [
        {label:formatDate(date),date:date},
        {label:weekText || ""},
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

//カレンダーの合計行を呼び出す関数
const SumRow = ()=>{

    //カレンダーの合計行の出勤時刻以降の列を呼び出す関数
    const CalenderSum =(props)=>{
    return <Ssumtd>{props.tablesumlabel}</Ssumtd>
    };

    return(
        <>
        <Ssumtd colSpan="2">合計</Ssumtd>
        {tableSum.map(label=><CalenderSum tablesumlabel={label}/>)}
        </>
    )
};

//カレンダーのヘッダーセルを呼び出す関数(=>配列tableHead)
const CalenderHead = (props)=>{
    return <Sth>{props.headlabel}</Sth>
};

//カレンダーのボディセルを呼び出す関数(=>)
const CalenderBody = (props)=>{

    if (!props.date) {
        return <Std>{props.tablelabel}</Std>;
        // return <Std>{React.isValidElement(props.tablelabel) ? props.tablelabel : props.tablelabel}</Std>;
      }
    
    //土日の場合、フォントの色を変更する
    const dayOfWeek = props.date.getDay();
    let color = 'inherit';
    let weekText = ""
    if(dayOfWeek===0){
        color = 'red';
    }else if(dayOfWeek===6){
        color='blue';
    }

    // formatDate 関数を使って曜日に色を適用
    const dateLabel = formatDate(props.date, color,weekText);

    return <Std underline={'underline'}>{dateLabel}</Std>

    // return <Std color={color}>{props.tablelabel}</Std>
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
            {dates.map((date,index) => (
          <tr key={date.toISOString()}>
            {generateTableBodyForRow(date).map((data,label)=><CalenderBody date={data.date} tablelabel={data.label}/>)}
          </tr>
        ))}
            <tr>
                <SumRow />
            </tr>
            </tbody>
        </Stable>
        </Sdiv>
    )
};

