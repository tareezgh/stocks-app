import React, { useEffect, useState } from "react";
import { setAllStocks } from "../../redux/slicers";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BsSearch } from "react-icons/bs";
import MyChart from "../../components/Chart";

import "./dashboard.css";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

import {
  fetchStockData,
  getUserStocks,
  updateUserStocks,
} from "../../fetchData";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("username");
  const [stock, setStock] = useState();
  const [chartDataOpen, setChartDataOpen] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const stocksData = useSelector((state: any) => state.stocks.allStocks);

  const apiResponse: any[] = [];

  const fetchStocks = async () => {
    try {
      const userStocks = await getUserStocks(currentUser);
      for (const data of userStocks.data) {
        const res = await fetchStockData(data);
        apiResponse.push(res);
      }
      dispatch(setAllStocks(apiResponse));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStocks();

    const interval = setInterval(() => {
      fetchStocks();
    }, 15 * 60 * 1000); // Code to run every 15 minutes (in milliseconds)
    //Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleStockChart = (stock?: any) => {
    setChartDataOpen(!chartDataOpen);
    setStock(stock);
  };

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue.toLowerCase());
  };

  const searchAndAdd = async () => {
    const args = {
      username: currentUser,
      stockToAdd: searchInput,
    };
    if (searchInput) {
      await updateUserStocks(args).then((res) => {
        if (res!.data.status === "success") {
          fetchStocks();
          toast.success("Added Stock!", {
            position: "bottom-center",
            hideProgressBar: true,
          });
          setSearchInput(" ");
        }
      });
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center d-flex">
          <Col xs={12} md={7} className="my-5">
            <Form className="form-inline ml-auto d-flex ">
              <FormControl
                type="text"
                placeholder="Enter stock symbol "
                className="mr-sm-2 search-input"
                onChange={(e) => searchItems(e.target.value)}
              />
              <Button className="search-button" onClick={searchAndAdd}>
                <BsSearch className="search-icon" />
              </Button>
            </Form>
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
                        <th>Stock Symbol</th>
                        <th>Price [$]</th>
                        <th>Daily change [%]</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stocksData?.map((stock: any, key: number) => (
                        <tr key={key} onClick={() => toggleStockChart(stock)}>
                          <td>{stock.ticker}</td>
                          <td>{stock.ask}</td>
                          <td
                            style={{
                              color: `${stock.dayChange < 0 ? "red" : "green"}`,
                            }}
                          >
                            {stock.dayChange}
                          </td>
                        </tr>
                      ))}
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
          <MyChart stock={stock!} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;
