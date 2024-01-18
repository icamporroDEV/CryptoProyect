import React from "react";

const Coin = ({ image, name, symbol, price, volume, priceChange }) => {
  return (
    <div>
      <div>
        <div>
          <img src={image} />
          <h1>{name}</h1>
          <p>{Symbol}</p>
        </div>
        <div>
          {/* <p>${price}</p> */}
          <p>${volume.toLocaleString()}</p>
          <p>{priceChange.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
