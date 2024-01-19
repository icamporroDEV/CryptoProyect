// CryptoTable.js
import React from "react";
import "./CryptoTable.css";

const CryptoTable = ({ filteredCoins }) => {
  return (
    <table className="table table-dark table-responsive table-hover" style={{width:'98%', marginLeft:'10px'}} >
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Volume</th>
          <th>Price Change</th>
        </tr>
      </thead>
      <tbody>
        {filteredCoins?.map((coin) => (
          <tr key={coin.id}>
              <td>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "30px", height: "30px" }}
                />
              </td>
              <td>{coin.name}</td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>${coin.current_price}</td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td >
              <div className={`ml-2 square ${coin.price_change_percentage_24h < 0 ? "red" : "green"}`}>
              {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
           </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
