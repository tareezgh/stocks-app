import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TableData from "../../components/TableData";
import SearchBar from "../../components/SearchBar";
import Sidebar from "../../components/Sidebar";
import MyNavbar from "../../components/Navbar";

const Dashboard: React.FC = () => {
  return (
    <Container fluid>
      <MyNavbar />
      <Sidebar />
      <Row className="justify-content-center d-flex">
        <Col xs={12} md={8} className="mb-5 mt-5">
          <SearchBar />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Stock Data 1</Card.Title>
              <Card.Text>Some information about stock data 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Stock Data 2</Card.Title>
              <Card.Text>Some information about stock data 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6}></Col>
        <Col xs={12} lg={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Table Data</Card.Title>

              <TableData />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
