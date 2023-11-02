import React from "react";
import { WideHeader } from "./WideHeader";
import { NarrowDeskTopHeader } from "./NarrowDeskTopHeader";
import {useState,useEffect} from "react";

export const ResponsiveHeader = ()=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize',handleResize);

        return()=>window.removeEventListener('resize',handleResize);
    },[]);

    return windowWidth > 800 ? <WideHeader />:<NarrowDeskTopHeader />;
};
