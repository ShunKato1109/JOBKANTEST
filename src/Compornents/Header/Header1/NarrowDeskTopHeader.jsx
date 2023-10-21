import React from "react";
import styled from "styled-components";

//Header1 Style
export const Sheader1 = styled.header`
    background-color:#222222;
    border:0.5px solid gray;
    display:flex;
    color:white;
    // height:50px;
    flex-direction:column;
`;

//FirstRowDiv Style
export const SfirstRowItem = styled.div`
    display:flex;
    height:50%;
    width:100%;
    > * {
        border:none;
        border-bottom:0.5px solid gray;
        width:100%;
    }
`;

//SecondRowDiv Style
export const SsecondRowItem = styled.div`
    display:flex;
    height:50%;
    width:100%;
    > * {
        border:none;
    }
`;

//ThirdRowDiv Style
export const SthirdRowItem = styled.div`
    display:flex;
    height:100%;
    margin-left:;
    >*{
        display:flex;
        height:50%;
    }
`;


//Style Header1Button
export const SheadButton1={
    fontSize:'11px',
    paddingLeft:'25px',
    paddingRight:'25px',
    cursor:'pointer',
    height:'100%',
    borderRight:'0.5px solid gray',
};

//Style HeaderButton2
export const SheadButton2={
    fontSize:'10px',
    paddingLeft:'25px',
    paddingRight:'25px',
    cursor:'pointer',
    height:'100%',
    borderRight:'0.5px solid gray',
  };

  //HeaderButton3 CSS
export const SlogOutButton={
    fontSize:'10px',
    marginLeft:'auto',
    paddingLeft:'10px',
    paddingRight:'10px',
    cursor:'pointer',
    height:'100%',
    borderLeft:'0.5px solid gray',
  };

  //HeadButton Style
  export const SHeadButton = styled.button`
    color:#c0c0c0;
    background-color:transparent;
    &:hover{
        color:white;
        background-color:black;
    }
  `; 

  //header1 button Compornent
export const HeadButton1 =(props)=>{
    return <SHeadButton style={SheadButton1}>{props.label}</SHeadButton>
  };
  
  //header button2 Compornent
  export const HeadButton2 =(props)=>{
    return <SHeadButton style={SheadButton2}>{props.label}</SHeadButton>
  };

    //LogOutButton Compornent
    export const LogOutButton =(props)=>{
        return <SHeadButton style={SlogOutButton}>{props.label}</SHeadButton>
      };


      //WideDeskTopCompornent
      export const NarrowDeskTopHeader = ()=>{
          return (
              <Sheader1>
            <SfirstRowItem>
              <HeadButton1 label="ジョブカン" />
            </SfirstRowItem>
            <SsecondRowItem>
              <HeadButton2 label="勤怠" />
              <HeadButton2 label="労務" />
              <HeadButton2 label="給与" />
              <LogOutButton label="ログアウト" />
              </SsecondRowItem>
          </Sheader1>
          )
      };