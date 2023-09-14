import axios from "axios"

export const getPriceDataApi= (id,currency,days,priceType)=>{
    let priceChart = 
    axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
    .then((response) => {
      console.log(response.data[priceType])
      return response.data[priceType];
    })
    .catch((err) => {
        console.log(err);
    });
    return priceChart;
}