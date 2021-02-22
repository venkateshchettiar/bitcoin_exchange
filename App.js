import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';


function App() {

  const [coins,setCoins]  = useState([])

  useEffect(()=> {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false`)
    .then(res=>{
      setCoins(res.data[0]);
      console.log(res.data[0])
    }).catch(error => alert( 'An Error Occured'));
  },[])

  return (
    <div className='coin-app'>
      <div className="coin-search">
        <h1>Exchange Rate of Bitcoins </h1>
        <h2>2 {coins.name}</h2>
        <h2>${(coins.current_price)*2}</h2>
      </div>
    </div>
  );
}

export default App;
