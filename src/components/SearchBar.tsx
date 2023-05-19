import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import { fetchData } from "../fetchData";
import { setAllStocks } from "../redux/slicers";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const dispatch = useDispatch();

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue.toLowerCase());
  };

  const searchAndAdd = async () => {
    fetchData(
      "https://api.stockdata.org/v1/data/quote?symbols=AACG%2CTSLA%2CMSFT&api_token=Vvsz1mUqFChImHM80elcL05mN6xDL5CluckUw4rX"
    ).then((res) => dispatch(setAllStocks(res)));
  };

  return (
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
  );
};

export default SearchBar;
