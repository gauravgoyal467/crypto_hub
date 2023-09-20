import convertDate from "./convertDate";

export const setChartDataFunc = (setChartData,coin1,priceData1,coin2,priceData2) => {
  console.log(coin1,coin2);
  if(coin2){
    setChartData({
      labels: priceData1.map((data) => convertDate(data[0])),
      datasets: [
        {
          label: coin1,
          data: priceData1.map((data) => data[1]),
          borderWidth: 1,
          fill: true,
          backgroundColor: priceData2 ? "transparent" : "rgba(58, 128, 233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
        {
          label: coin2,
          data: priceData2.map((data) => data[1]),
          borderWidth: 1,
          fill: true,
          backgroundColor: priceData2 ? "transparent" : "rgba(97, 201, 111,0.1)",
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "y1",
        },
      ],
    });

  }else{ 
    setChartData({
      labels: priceData1.map((data) => convertDate(data[0])),
      datasets: [
        {
          label: coin1,
          data: priceData1.map((data) => data[1]),
          borderWidth: 1,
          fill: true,
          backgroundColor: priceData2 ? "transparent" : "rgba(58, 128, 233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
      ],
    });
  }
  };