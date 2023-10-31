import React from "react";
import styled from "styled-components";
import { SideBar } from "../../../Components/SideBar/SideBar";
import { WorkRecordMain } from "./02Main";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const SworkRecordBody = styled.div`
    background-color:#F7F7F7;
    display:flex;
    width:100%;
`;

/* ====== Components ====== */
export const WorkRecordBody = ()=>{
    return(
        <SworkRecordBody>
            <SideBar />
            <WorkRecordMain />
        </SworkRecordBody>
    )
};
