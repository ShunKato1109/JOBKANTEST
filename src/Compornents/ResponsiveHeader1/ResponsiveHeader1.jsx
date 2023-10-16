import React from "react";
import styled from "styled-components";
import { WideDeskTopHeader } from "./WideDeskTopHeader";
import { NarrowDeskTopHeader } from "./NarrowDeskTopHeader";
import {useState,useEffect} from "react";

export const ResponsiveHeader = ()=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize',handleResize);

        return()=>window.removeEventListener('resize',handleResize);
    },[]);

    return windowWidth > 600 ? <WideDeskTopHeader />:<NarrowDeskTopHeader />;
};
