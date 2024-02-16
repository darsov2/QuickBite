import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import '../loyaltyPage.css'
// import "@fontawesome/css/all.min.css";
// import "../../../../../../Desktop/trip2mk/src/HomePage/homePage.css";
import Nav from "react-bootstrap/Nav";
import { CgProfile } from "react-icons/cg";

import NavDropdown from "react-bootstrap/NavDropdown";
import Counter from "./Counter";
// import Counter from "../../../../../../Desktop/trip2mk/src/HomePage/Counter";
// import Navbar from "../Layout/Navbar;
// import NavbarCustom from "../Layout/Navbar";





const HeroLoyalty = (props) => {
    return (
        <>
            <Container>
                <Container style={{ marginTop: "25%", marginLeft: '', fontSize: '5em', color: 'white' }}>
                    <h1 style={{ marginBottom: "0", marginLeft: '', fontSize: '0.9em', fontWeight: '1000', textAlign: 'left'}}>YOU EAT.<br/>WE REWARD.</h1>
                </Container>
                <Row>
                    <h1
                        style={{ marginTop: "1%", marginLeft: '', fontSize: '12em !important', color: 'white' }}
                        className="visit-kuponi"
                        dangerouslySetInnerHTML={{ __html: props.text }}
                    ></h1>
                </Row>

                <h1 className="visit-macedonia"></h1>
            </Container>

            <Container style={{ marginTop: "20%", marginRight: "10%" }}>
                <Row>
                    <Col md="auto" className="my-auto">
                        <Button hidden={true} className="button-white" href={'/plan#destinations'}>VIEW DESTINATIONS</Button>
                    </Col>
                    <Col id={'stats-placeholder'}></Col>
                    {props.showStats === "true" && (
                        <>
                            {/* Additional content for stats */}
                        </>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default HeroLoyalty;




// const HeroLoyalty = (props) => {
//     return (
//         <>
//
//             <Container>
//
//                  <Container style={{ marginTop: "25%" , marginLeft: '4%', fontSize:' !important'}}>
//                     <h1 style={{ marginTop: "25%" , marginLeft: '-10%', fontSize:' 5em '}}>YOU EAT.</h1>
//                     <h1 style={{ marginTop: "0" , marginLeft: '-10%', fontSize:' !5em '}}>WE REWARD.</h1>
//                  </Container>
//                 <h1
//                     style={{ marginTop: "1%" , marginLeft: '-10%', fontSize:'12em !important'}}
//                     className="visit-kuponi"
//                     dangerouslySetInnerHTML={{ __html: props.text }}
//                 ></h1>
//                 <h1 className="visit-macedonia"></h1>
//             </Container>
//
//             <Container style={{ marginTop: "20%", marginRight: "10%"  }}>
//                 <Row >
//                     <Col md="auto" className="my-auto">
//                         <Button hidden={true} className="button-white" href={'/plan#destinations'}>VIEW DESTINATIONS</Button>
//                     </Col>
//                     <Col id={'stats-placeholder'}></Col>
//                     {props.showStats === "true" && (
//                         <>
//
//
//                         </>
//                     )}
//                 </Row>
//             </Container>
//         </>
//     );
// };
//
// export default HeroLoyalty;
