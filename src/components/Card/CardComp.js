import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function CardComp() {
  return (
    <Card className="w-100">
      <Row noGutters>
        <Col md={3}>
          <Card.Img src="./image.jpg" />
        </Col>
        <Col md={9}>
          <Card.Body>
            <Card.Title>Example Card</Card.Title>
            <Card.Text>
              This is an example card with a 25% image and a 75% text description.
              The card takes 100% width of the screen and is built with React and Bootstrap.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardComp;
