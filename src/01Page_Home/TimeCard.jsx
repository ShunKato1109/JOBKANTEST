/* ======================================================================== */  
/* ============================ import ==================================== */  
/* ======================================================================== */  
import React,{ useState, useEffect }  from 'react';
import styled from "styled-components";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 
/* ====== Styled Components ====== */
const StimecardDiv = styled.div` // タイムカード全体を囲うスタイル
  display:flex;
  flex-direction:column;
  max-width:100%;
  background-color:white;
  border-radius:5px;
  height:436.21px;
  margin-top:15px;
  margin-bottom:15px;
  margin-right:13px;
  margin-left:13px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  align-items:center;
`;

const StimeCardBody = styled.div` //タイムカードのボディ関数を囲うスタイル
  display:flex;
  width:58%;
  padding-right:15px;
  padding-left:15px;
  flex-direction:column;
  max-width:58%;
`;

const StimecardHeader = styled.div` //タイムカードのヘッダー関数を囲うスタイル
  display:flex;
  height:46.79px;
  width:100%;
  font-size:22.75px;
  background-color:#E6E6E6;
  align-items:center;
  border-radius:5px 5px 0px 0px;
  margin-right:13px;
  margin-left:13px;
  
`;

const StimerDiv = styled.div` //時計関数を囲うスタイル
font-size:96px;
text-align:center;
`;

const SinputBoxDiv = styled.div` // インプットボックス関数を囲うスタイル
    display:flex;
    justify-content:center;
`;


const SinputBoxInput = styled.input` //インプットボックスで表示するボックスのスタイル
    width:100%;
    height:35px;
    padding:5px;
`;

const SselectBoxDiv = styled.div` // セレクトボックス関数を囲うスタイル
    display:flex;
    justify-content:center;
`;

const SselectBoxSelect = styled.select` //セレクトボックスの表示する選択肢のスタイル
    width:100%;
    height:30px;
    margin-bottom:10px;
    padding:5px;
`;

const StimeCardButton = styled.button` // ボタンのスタイル
    width:100%;
    height:30.58px;
    margin-right:15px;
    font-size:13px;
    justify-content:space-between;
    border-radius:5px ;
    border:none;
    cursor:pointer;
`;

const SButtonBoxDiv = styled.div` // ボタンボックス関数を囲うスタイル
    display:flex;
    justify-content:center;
    justify-content:space-between;
    padding-left:-15px;
    padding-right:-15px;
    height:35px;
    width:100%;
    margin-top:10px;
`;

const SradioButtonDiv = styled.div` //ラジオボタン関数を囲うスタイル
    display:flex;
    width:100%;;
    margin-top:10px;
    font-size:13px;
`;

/* ======================================================================== */  
/* ============================== Arry ==================================== */  
/* ======================================================================== */ 
/* ====== セレクトボックス内の選択肢の配列 ====== */
const options = [
  '㈱レイヴン BeコネクティッドG',
  '㈱レイヴン PM/PMO事業部',
  '㈱レイヴン',
];

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 
/* ====== タイムカードのヘッダー ====== */
export const TimeCardHeader = ({text})=>{
  return(
    <StimecardHeader>
      <p style={{marginLeft:'16.25px'}}>{text}</p>
    </StimecardHeader>
  )
};

/* ====== 時計 ====== */
export const Clock = () => {
  
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    
    const timerId = setInterval(
      () => setCurrentTime(new Date()),
    );

    return () => clearInterval(timerId);
  }, []);

  // 時刻を00:00:00の形式にフォーマットする関数(currentTime=>time)
  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <StimerDiv>{formatTime(currentTime)}</StimerDiv>
      
  );
};  


/* ====== セレクトボックス ====== */
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


/* ====== インプットボックス ====== */
export const TimeCardInputBox = ()=>{
  const[inputValue,setInputValue] = useState('');

  const InputChange =(event)=>{
          setInputValue(event.target.value);    
  };

  return(
      <SinputBoxDiv>
      <SinputBoxInput value={inputValue} onChange={InputChange} placeholder="備考"/>
      </SinputBoxDiv>
  )
};

/* ====== ボタン ====== */
export const TimeCardButton =(props)=>{
  return(
      <StimeCardButton onClick={props.onClick} style={{...props.style, backgroundColor:props.backcolor ,color:props.fontcolor}}>
          {props.label}
      </StimeCardButton>
  )
};

/* ====== ボタンボックス ====== */
export const ButtonBox =({setText})=>{

  return(
      <SButtonBoxDiv>
          <TimeCardButton onClick={()=>setText('出勤中')} label="出 勤" backcolor="#EB840B" fontcolor="white"/>
          <TimeCardButton onClick={()=>setText('休憩中')} label="休憩開始" backcolor="#ADADAD" fontcolor="white"/>
          <TimeCardButton onClick={()=>setText('出勤中')} label="休憩終了" backcolor="#ADADAD" fontcolor="white"/>
          <TimeCardButton onClick={()=>setText('退勤中')} label="退 勤" backcolor="#30B2D6" fontcolor="white" style={{marginRight:0}}/>
      </SButtonBoxDiv>
  )
};

/* ====== ラジオボタン ====== */
export const TimeCardRadioButtonBox =()=>{
  return(
      <SradioButtonDiv>
        <label>
            <input type="radio"/>通常モード
            <input type="radio"/>夜勤モード
        </label>
      </SradioButtonDiv>
  )
};


/* ======================================================================== */  
/* ============================ Main ====================================== */  
/* ======================================================================== */
export const TimeCard = ()=>{

  const [text, setText] = useState('退勤中');

    return(
      <StimecardDiv>

        <TimeCardHeader text={text}/>
        
        <StimeCardBody>
          <Clock />
          <p style={{fontSize:'13px',marginRight:'auto',marginBottom:'6.5px'}}>打刻場所を選択してください</p>
          <TimeCardSelectBox />
          <TimeCardInputBox />
          <ButtonBox setText={setText}/>
          <TimeCardRadioButtonBox />
        </StimeCardBody>
      
      </StimecardDiv>
    )
};






  