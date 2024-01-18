// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import CryptoTable from "./CryptoTable";
import Footer from "./Footer";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const apiKey = "CG-gB6DoK5RqDJtSjjiozJBKMWy";

    const fetchData = async () => {
      try {
        const cachedCoins = localStorage.getItem("cryptoCoins");

        if (cachedCoins) {
          setCoins(JSON.parse(cachedCoins));
        } else {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en&apiKey=${apiKey}`
          );

          const coinsWithPrice = response.data.map((coin) => ({
            ...coin,
            price: coin.current_price || 0,
          }));

          localStorage.setItem("cryptoCoins", JSON.stringify(coinsWithPrice));
          setCoins(coinsWithPrice);
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-app " style={{  background: ' linear-gradient(135deg, #232944, #326A0C)',minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="my-4" style={{ color: 'white' }}>CoinBase</h1>
          <form>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>

          <CryptoTable filteredCoins={filteredCoins} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
