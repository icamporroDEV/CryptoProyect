import React from "react";
import { Table } from "react-bootstrap";

const Coin = ({ image, name, symbol, price, volume, priceChange }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Price Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={image} alt={name} style={{ width: "30px", height: "30px" }} />
            </td>
            <td>{name}</td>
            <td>{symbol}</td>
            {/* Uncomment the line below if 'price' is defined somewhere */}
            <td>${price ?? "N/A"}</td>

            <td>${volume?.toLocaleString()}</td>
            <td>{priceChange?.toFixed(2)}%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Coin;
