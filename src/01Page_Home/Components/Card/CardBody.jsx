import React from "react";
import styled from "styled-components";
import { AdminMessageCard } from "./AdminMessageCard";
import { UserMessageCard } from "./UserMessageCard";


const ScardBodyDiv = styled.div`
    display:flex;
`;

export const CardBody = ()=>{
    return(
        <ScardBodyDiv>
        <UserMessageCard />
        <AdminMessageCard />
        </ScardBodyDiv>
    )
};