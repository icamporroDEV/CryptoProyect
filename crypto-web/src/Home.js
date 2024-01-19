import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import CryptoTable from './CryptoTable'
import Footer from './Footer'
import axios from 'axios'

export const Home = () => {
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
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <div className="row ">
          <br></br>
          <div className="col-md-12" style={{marginLeft:'15px'}}>
            <form>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search"
                onChange={handleChange}
                style={{width:'98%', background: '#212529', color: 'white'}}
              />
            </form>

            <CryptoTable filteredCoins={filteredCoins} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
