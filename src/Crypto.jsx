import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function Crypto() {
  const [arr, setArr] = useState([]);
  const response = axios.get("https://api.coincap.io/v2/assets", {
    headers: { Authorization: "Bearer 2b615135-55ed-4aca-a647-82536799a867 " },
    params: { limit: 100 },
  });
  // console.log(response)

  useEffect(() => {
    const time = setInterval(() => {
      response
        .then(function (res) {
          console.log(res.data);
          setArr(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(arr);
    }, 10000);
    // clearInterval(time)
  }, []);

  return (
   <div style={{textAlign:"center"}}>
  
  <h3>Top 100 crypto currencies </h3>
   
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>changePercent24Hr</th>
            <th>PriceUsd</th>
            <th>Supply</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {arr
            .sort((a, b) => b.changePercent24Hr - a.changePercent24Hr)
            .map((coin, i) => {
              return (
                <tr>
                 <td>{coin.id}</td>
                  <td>{coin.name}</td>
                  <td>{coin.changePercent24Hr}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.priceUsd}</td>
                  <td>{coin.supply}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
     
     
  
     </div>
  );
}

export default Crypto;
