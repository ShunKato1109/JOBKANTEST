import React from "react";
import styled from "styled-components";
import { ResponsiveHeader } from "./ResponsiveHeader1";
import { Header2 } from "./Header2";

const SheaderBody = styled.div`
    z-index:2;
`;

export const HeaderBody = ()=>{
    return(
        <SheaderBody>
            <ResponsiveHeader />
            <Header2 />
        </SheaderBody>
    )
};