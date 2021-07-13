import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <Container fluid>
        <Row className="bck">
          <a href="./Header">
            <span>Back to Top</span>
          </a>
        </Row>
        <Row className="info">
          <Col>
            <h4 className="info_title">Get to Know Us</h4>
            <ul className="list-unstyled info_list">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Gift a Smile</li>
            </ul>
          </Col>
          <Col>
            <h4 className="info_title">Connect with Us</h4>
            <ul className="list-unstyled info_list">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
          <Col>
            <h4 className="info_title">Let Us Help You</h4>
            <ul className="list-unstyled info_list">
              <li>Amazon Assistant Download</li>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
            </ul>
          </Col>
        </Row>
        <Row className="footer_footer">
          <Col>
            <img
              className="footer_img"
              src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?resize=600%2C182&ssl=1"
            />
          </Col>
          <Col>
            <p className="footer_owner"> Created by @ Mongoose.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
