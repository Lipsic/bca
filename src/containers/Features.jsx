import React from "react";
import { FeaturesStyles } from "../styles/Features";
import ComponentHeader from "../styles/ComponentHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Images
import computer from "../assets/svg/computer.svg";
import trendingUp from "../assets/svg/trending-up.svg";
import creditCard from "../assets/svg/credit-card.svg";
import banking from "../assets/banking_re_kwqh.svg";
import payments from "../assets/payments_re_y8f2.svg";
import transactions from "../assets/transactions_-02-ka.svg";

const Features = () => {
  return (
    <FeaturesStyles>
      <ComponentHeader>
        <h2>SERVIÇOS</h2>
        <h3>Everything you need in a modern bank and more.</h3>
      </ComponentHeader>
      <Container fluid>
        <Row>
          <Col>
            <img className="lazy" src={banking} alt="" />
          </Col>
          <Col>
            <div className="features__icon">
              <div className="icon">
                <img src={computer} alt="computer" />
              </div>
              <h5>100% digital bank</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                rerum aut natus incidunt eius non deleniti quia doloremque nobis
                voluptas.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <div className="features__icon">
              <div className="icon">
                <img src={trendingUp} alt="Trending Up" />
              </div>
              <h5>Watch your money grow</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                rerum aut natus incidunt eius non deleniti quia doloremque nobis
                voluptas.
              </p>
            </div>
          </Col>
          <Col>
            <img className="lazy" src={transactions} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="lazy" src={payments} alt="" />
          </Col>
          <Col>
            {" "}
            <div className="features__icon">
              <div className="icon">
                <img src={creditCard} alt="Credit Card" />
              </div>
              <h5>Free debit card included</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                rerum aut natus incidunt eius non deleniti quia doloremque nobis
                voluptas.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FeaturesStyles>
  );
};

export default Features;
