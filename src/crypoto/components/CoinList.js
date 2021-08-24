import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
import './coin.css'

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => { setCoins(res.data) })
            .catch((err) => console.error(err))
    }, [])

    const handleChange = (e) => { setSearch(e.target.value) }
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div className="coin-app">
            <div className coin-search>
                <h1 className="coin-text">Search a coin</h1>
                <form>
                    <input type="text" placeholder="Search" onChange={handleChange} className="coin-input" />
                </form>
            </div>

            {filteredCoins.map(coin => {
                return (
                    <Coin key={coin.id} name={coin.name} symble={coin.symbol} image={coin.image} price={coin.current_price} voloume={coin.mark_cap} priceChange={coin.price_change_percentage_24h} marketcap={coin.total_volume} />
                )
            })}
        </div>
    )
}

export default CoinList
