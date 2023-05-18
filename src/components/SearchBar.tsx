import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <form className="form-inline my-2 my-lg-0 ml-auto d-flex ">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 search-input"
      />
      <Button className="search-button">
        <BsSearch className="search-icon" />
      </Button>
    </form>
  );
};

export default SearchBar;

// import React from 'react';
// import { Form, FormControl, Button } from 'react-bootstrap';
// import { BsSearch } from 'react-icons/bs';

// const SearchBar: React.FC = () => {
//   return (
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-primary">
//         <BsSearch />
//       </Button>
//     </Form>
//   );
// };

// export default SearchBar;
