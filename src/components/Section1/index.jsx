import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Section1 = () => {
    return (
        <>
            <div className="mt-5">
                <Container>
                    <p className="font-1">Software design <br />
                        and development company</p>
                    <p className="py-3">Shakuro is a multidisciplinary design and development agency <br />
                        working with individual startups and enterprises worldwide.</p>
                    <NavLink className="mx-4 text-decoration-none text-dark" to="/touch"><button className="rounded-pill button-1 text-white btn btn-dark px-5 py-3">Get in Touch</button></NavLink>
                    <NavLink className="mx-4 text-decoration-none text-dark" to="/work">Works</NavLink>

                </Container>
            </div>
        </>
    )
}

export default Section1;