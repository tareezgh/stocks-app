import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { updateUserStocks } from "../fetchData";
import { setAllStocks } from "../redux/slicers";
import "./SearchBar.css";
import { toast } from "react-toastify";

const SearchBar = () => {
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("username");
  const [searchInput, setSearchInput] = useState<string>("");

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
        if (res.data.status === "success") {
          dispatch(setAllStocks(res.data));
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
