import axios from "axios";

export const getCoinDataApi =(id)=>{
    let coinData = 
    axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((err) => {
        console.log(err);
    });
    return coinData;
}