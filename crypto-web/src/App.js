import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const apiKey = "CG-gB6DoK5RqDJtSjjiozJBKMWy";

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&apiKey=${apiKey}`
        );

        setCoins(response.data);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchData();
  }, []); // Dejamos la dependencia vacía para que solo se ejecute al montar el componente

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-app">
      <div>
        <h1>Search a currencyyy</h1>
        <form>
          <input
            type="text"
            placeholder="search"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      {filteredCoins.map((coin) => (
        <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  );
}

export default App;
