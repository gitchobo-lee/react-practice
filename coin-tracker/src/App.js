import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(1);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const coinChange = (event) => {
    setPrice(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>일론 머스크 {loading ? "" : `(${coins.length})`}</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            id='USD'
            value={amount}
            onChange={onChange}
            placeholder='USD'
          ></input>
          <select onChange={coinChange}>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}):${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <p>
            {amount} USD로 {amount / price}개의 코인을 살 수 있습니다
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
