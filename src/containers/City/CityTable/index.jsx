import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';

const CityTable = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Guest List</h3>
      </Col>
    </Row>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default CityTable;
