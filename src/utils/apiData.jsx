export const cryptoOptions = {
    method: 'GET',
    // url: 'https://docs.coincap.io/',
    headers: {
      'Key':'2b615135-55ed-4aca-a647-82536799a867' ,
      'Host':  'api.coincap.io/v2/assets'
    }
  };


  export const fetchData = async(url) =>{
    const response = await fetch(url);
    const data = await response.json();

    return data

}



// // // 6b3ad9db
// const ApiUrl = "http://www.omdbapi.com?apikey=6b3ad9db"
// // const movie1 = {
// //   "Title": "Italian Spiderman",
// //   "Year": "2007",
// //   "imdbID": "tt2705436",
// //   "Type": "movie",
// //   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// // }

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [searchItem, setSearch] = useState("")


//   const searchMovies = async (titel) => {

//     // this is going to call our api
//     const response = await fetch(`${ApiUrl}&s=${titel}`)
//     const data = await response.json();

//     setMovies(data.Search);

//   }