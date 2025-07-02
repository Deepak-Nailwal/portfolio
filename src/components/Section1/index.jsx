import React from "react";
import { Container } from "react-bootstrap";

const Section1 = () => {
    return(
        <>
        <div className="mt-5">
        <Container>
        <p className="font-1">Software design <br />
and development company</p>
        <p className="py-3">Shakuro is a multidisciplinary design and development agency <br />
working with individual startups and enterprises worldwide.</p>
       <a href="#"><button className="rounded-pill button-1 text-white btn btn-dark px-5 py-3">Get in Touch</button></a>
       <a className="hover-2 mx-3" href="#"><button type="button" className="btn ">Works</button></a>
            </Container>
            </div>
        </>
    )
}   

export default Section1;