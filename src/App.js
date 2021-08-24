// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import axios from 'axios'
// import Coin from './crypoto/components/Coin';
import CoinList from './crypoto/components/CoinList';

// 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h3> Market X-Plorer </h3>
      </header>
      <CoinList/>
    </div>
  );
}

export default App;
