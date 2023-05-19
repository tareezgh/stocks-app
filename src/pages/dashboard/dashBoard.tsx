import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TableData from "../../components/TableData";
import SearchBar from "../../components/SearchBar";
import MyNavbar from "../../components/Navbar";

const Dashboard: React.FC = () => {
  return (
    <>
      <MyNavbar />
      <Container fluid className="full-page-container">
        <Row className="justify-content-center d-flex">
          <Col xs={12} md={7} className="my-5">
            <SearchBar />
          </Col>
        </Row>

        <Row className="cards-row justify-content-center d-flex">
          <Col xs={12} lg={10}>
            <Card className="mb-5">
              <Card.Body>
                <Card.Title className="fs-2">Stocks Data</Card.Title>
                <TableData />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
