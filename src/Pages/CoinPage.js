import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader";
import ListLayout from "../components/Dashboard/ListLayout";
import CoinInfo from "../components/Coin/CoinInfo";
import { convertCoinData } from "../functions/convertCoinData";
import { getCoinDataApi } from "../functions/getCoinDataApi";
import { getPriceDataApi } from "../functions/getPriceDataApi";
import Chart from "../components/Coin/Chart";
import FilterComponent from "../components/Dashboard/FilterComponents";
import { setChartDataFunc } from "../functions/setChartDataFunc";
import DataToggle from "../components/Coin/DataToggle";
import Footer from "../components/Common/Footer";
import '../App.css'

const CoinPage = ({ currency }) => {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, currency]);

  useEffect(() => {
    if (days) {
      setIsLoading(true);
      fetchPrice();
    }
  }, [days]);

  const daysList = ["7", "15", "30", "60", "120", "240", "360"];
  async function fetchData() {
    let data = await getCoinDataApi(id);
    if (data) {
      convertCoinData(setCoinDetail, data, currency.toLowerCase());
      let priceData = await getPriceDataApi(id, currency, days,priceType);
      if (priceData) { 
        setChartDataFunc(setChartData,id,priceData);
        setIsLoading(false);
      }
    }
  }

  async function fetchPrice() {
    let priceData = await getPriceDataApi(id, currency, days,priceType);
    if (priceData) {
      setChartDataFunc(setChartData,id,priceData);
      setIsLoading(false);
    }
  }

  

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    let priceData = await getPriceDataApi(id, currency, days,newType);
    if (priceData) {
      setChartDataFunc(setChartData,id,priceData);
      setIsLoading(false);
    }
  };

  return (
    <div >
      {isLoading ? (
        <Loader />
      ) : (
        <>
           <ListLayout coin={coinDetail} currency={currency}/>
          <div className="coinManipulate">
            <FilterComponent
              val={days}
              setVal={setDays}
              itemList={daysList}
              label={"Days"}
              flag={false}
              className="filter"
            />
  
            <DataToggle 
              priceType={priceType} 
              setPriceType={setPriceType}
              handlePriceTypeChange={handlePriceTypeChange} />
          </div>
          <Chart chartData={chartData}  priceType={priceType} multiAxis={false} curr={currency} />
          <CoinInfo name={coinDetail.name} desc={coinDetail.desc} />
          
        <Footer />
        </>
      )}
    </div>
  );
};

export default CoinPage;
