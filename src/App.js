import logo from './logo.svg';
import './App.css';
import Crypto from './Crypto';

// import { cryptoOptions , fetchData } from './utils/apiData';


function App() {
  
 
// key 2b615135-55ed-4aca-a647-82536799a867 
// url : https://docs.coincap.io/
// "http://www.omdbapi.com?apikey=6b3ad9db"

// var axios = require('axios');

// var config = {
//   method: 'get',
// maxBodyLength: Infinity,
//   url: 'api.coincap.io/v2/assets',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



return (
   <div className="App">
    <Crypto/>
  </div>
  );
}

export default App;
