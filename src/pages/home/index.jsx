import React from "react";
import Section1 from "../../components/Section1";
import Consult from "../../components/consult";
import Video from "../../components/video/video";
import Section2 from "../../components/Section2";
import Section5 from "../../components/section5";
import Section3 from "../../components/section3";
import Section4 from "../../components/section4";

const Home = () => {
    return(
        <>
         <Section1/>
                <Consult/>
                <Video/>
                <Section2/>
                <Section5/>
                <Section3/>
                <Section4/>
        </>
    )
}

export default Home;