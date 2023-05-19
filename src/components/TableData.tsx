import React from "react";
import { useSelector } from "react-redux";

const TableData = () => {
  const stocksData = useSelector((state: any) => state.stocks.allStocks);

  const getStockInfo = (stock: any) => {
    console.log(stock);
  };

  return (
    <div className="table-responsive table-container">
      <table className="table text-center">
        <thead>
          <tr className="fs-5">
            <th>Symbol</th>
            <th>Price</th>
            <th>Daily change</th>
          </tr>
        </thead>
        <tbody>
          {stocksData.map((stock: any, key: number) => (
            <tr key={key} onClick={() => getStockInfo(stock)}>
              <td>{stock.ticker}</td>
              <td>{stock.price}</td>
              <td>{stock.day_change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
