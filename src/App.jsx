import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import { SideBar} from "./Components/SideBar/SideBar";
import { TimeCard } from "./01Page_Home/Components/Card/TimeCard/TimeCard";
import { CardBody } from "./01Page_Home/Components/Card/CardBody";
import { HeaderBody } from "./Components/Header/HeaderBody";
import WorkRecordPage from "./02Page_WorkRecord/Page_WorkRecord";
import { FooterMain } from "./Components/Footer/FooterMain";
import { Home } from "./01Page_Home/Page_Home";

const App = ()=>{
  return(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/workrecord-page" element={<WorkRecordPage />} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;