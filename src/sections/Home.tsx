import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

/**
 * Batch component with blue color border and fluent ui
 */
const BatchView = styled.div`
  background: #2f6cbd;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  width: fit-content;
`;

/**
 * Text with blue color
 */
const BlueText = styled.span`
  color: #2f6cbd;
`;

/**
 * Gray Text
 */
const GrayText = styled.span`
  color: #6c757d;
`;

/**
 * Icon Convert svg to color: #;
 */
const Icon = styled.img`
  background: white;
  margin-right: 10px;
  height: 50px;
  width: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  display: block;

  &:hover {
    transform: scale(1.1);
  }
`;

/**
 * Section with min height as screen
 */
const Section = styled.section`
  min-height: calc(100vh - 120px);
  padding-top: 40px;
`;

/**
 * Home Section
 */
export default function Home() {
  return (
    <Section id="home" className="d-flex align-items-center">
      <Container fluid id="home">
        <Row>
          <Col md={6} className="my-6 d-flex align-items-center flex-column d-md-block">
            <div className="my-4 fs-1 fw-bold text-center text-md-start">
              Expanding Your Business with us <BlueText>Digitally</BlueText>
            </div>
            <BatchView className="my-3 text-center text-md-start">
              Design & Development Agency
            </BatchView>
            <div className="my-4 fs-5 text-center text-md-start">
              <GrayText>
                Support small business and join the nationwide
                movement to encourage commercial support for
                the millions of minority
              </GrayText>
            </div>
            <div className="my-4 fs-5 fw-bold text-center text-md-start">
              Follow us On Social Media
            </div>
            <div className="my-4 d-flex">
              <a href="#home">
                <Icon src={require("../assets/images/instagram.svg").default} alt="Instagram" />
              </a>
              <a href="#home">
                <Icon src={require("../assets/images/facebook.svg").default} alt="Facebook" />
              </a>
              <a href="#home">
                <Icon src={require("../assets/images/linkedin.svg").default} alt="LinkedIn" />
              </a>
              <a href="#home">
                <Icon src={require("../assets/images/whatsapp.svg").default} alt="WhatsApp" />
              </a>
            </div>
          </Col>
          <Col md={6} className="my-6">
            <div className="d-flex h-100 justify-content-center">
              <img
                src={require("../assets/images/business.png")}
                alt="Home"
                className="img-fluid m-auto"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
