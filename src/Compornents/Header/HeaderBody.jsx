import React from "react";
import styled from "styled-components";
import { ResponsiveHeader } from "./Header1/ResponsiveHeader1";
import { Header2 } from "./Header2/Header2";

const SheaderBody = styled.div`
    display:block;
`;

export const HeaderBody = ()=>{
    return(
        <SheaderBody>
            <ResponsiveHeader />
            <Header2 />
        </SheaderBody>
    )
};