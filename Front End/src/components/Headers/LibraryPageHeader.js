import React from 'react'

import{ Container } from 'reactstrap'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LibraryPageHeader() {
    let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/library.png") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center" id = 'libraryDiv'>
            <Card style={{width: '20rem'}}>
                <CardImg top src="assets/img/got.jpg" alt="Game of Thrones"/>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="primary">Go somewhere</Button>
                </CardBody>
            </Card>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default LibraryPageHeader;