import React from "react";
import styled from "styled-components";
import { SideBar } from "../../../Components/SideBar/SideBar";
import { WorkRecordMain } from "./02Main";

/* ======================================================================== */  
/* ============================ Styles ==================================== */  
/* ======================================================================== */ 

/* ====== Styled Components ====== */
const SworkRecordBody = styled.div`
    display:flex;
`;

/* ======================================================================== */  
/* ============================ Components ================================ */  
/* ======================================================================== */ 

/* ====== Components ====== */
export const WorkRecordBody = ()=>{
    return(
        <SworkRecordBody>
            <SideBar />
            <WorkRecordMain />
        </SworkRecordBody>
    )
};
