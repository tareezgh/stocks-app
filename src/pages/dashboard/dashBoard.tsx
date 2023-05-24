import React, { useEffect, useState } from "react";
import { setAllStocks } from "../../redux/slicers";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import { fetchData, getUserStocks } from "../../fetchData";
import MyChart from "../../components/Chart";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("username");
  const [chartDataOpen, setChartDataOpen] = useState(false);
  const stocksData = useSelector((state: any) => state.stocks.allStocks);

  const fetch = async () => {
    await getUserStocks(currentUser).then((res) => {
      console.log(res.data);
      fetchData(res.data).then((res) => dispatch(setAllStocks(res)));
    });
  };

  useEffect(() => {
    fetch();
    const interval = setInterval(() => {
      fetch();
    }, 5 * 60 * 1000); // Code to run every 5 minutes (in milliseconds)
    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleStockChart = (stock?: any) => {
    setChartDataOpen(!chartDataOpen);
    console.log(stock);
  };

  return (
    <>
      <Container fluid>
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
                <div className="table-responsive table-container">
                  <table className="table text-center">
                    <thead>
                      <tr className="fs-6">
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Daily change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={() => toggleStockChart()}>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      {/* {stocksData?.map((stock: any, key: number) => (
                        <tr key={key} onClick={() => toggleStockChart(stock)}>
                          <td>{stock.ticker}</td>
                          <td>{stock.price}</td>
                          <td>{stock.day_change}</td>
                        </tr>
                      ))} */}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Render the chart component here */}
      <Modal show={chartDataOpen} onHide={() => toggleStockChart()} centered>
        <Modal.Header closeButton>
          <Modal.Title>Stock Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyChart />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;
