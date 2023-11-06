import React from "react";
import styled from "styled-components";
import { ResponsiveHeader } from "./ResponsiveHeader";
import { Header2 } from "./TitleHeader";

const SheaderBody = styled.div`
    // z-index:2;
`;

export const HeaderBody = ()=>{
    return(
        <SheaderBody>
            <ResponsiveHeader />
            <Header2 />
        </SheaderBody>
    )
};