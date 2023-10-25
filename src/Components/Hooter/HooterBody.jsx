import React from "react";
import styled from "styled-components";
import { HooterSidebar } from "./HooterSidebar";
import { HooterMain } from "./HooterMain";

// Style hooterBody
const ShooterBody = styled.div`
    display:flex;
`;

//Compornent HooterBody 
export const HooterBody = ()=>{
    return(
        <ShooterBody>
            <HooterSidebar />
            <HooterMain />
        </ShooterBody>
    )
};