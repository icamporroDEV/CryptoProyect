// CryptoTable.js
import React from "react";

const CryptoTable = ({ filteredCoins }) => {
  return (
    <table className="table table-dark table-responsive table-hover">
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
            <td>{coin.symbol}</td>
            <td>${coin.current_price}</td>
            <td>${coin.market_cap.toLocaleString()}</td>
            <td className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
