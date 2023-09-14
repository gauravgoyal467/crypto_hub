import React, { useEffect, useState } from "react";
import SelectCoins from "../components/Compare/SelectCoins";
import FilterComponent from "../components/Dashboard/FilterComponents";
import { getCoinDataApi } from "../functions/getCoinDataApi";
import { convertCoinData } from "../functions/convertCoinData";
import { getPriceDataApi } from "../functions/getPriceDataApi";
import { setChartDataFunc } from "../functions/setChartDataFunc";
import CoinInfo from "../components/Coin/CoinInfo";
import Loader from "../components/Common/Loader";
import Chart from "../components/Coin/Chart";
import ListLayout from "../components/Dashboard/ListLayout";
import DataToggle from "../components/Coin/DataToggle";
import Footer from "../components/Common/Footer";
import '../App.css'

const ComparePage = ({ currency }) => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [crypto1price, setCrypto1Price] = useState([]);
  const [crypto2Price, setCrypto2Price] = useState([]);
  const [chartData, setChartData] = useState({});  
  const [priceType, setPriceType] = useState("prices");
  const [isLoading, setIsLoading] = useState(true);

  const daysList = ["7", "15", "30", "60", "120", "240", "360"];

  useEffect(() => {
    setIsLoading(true);
    if (crypto1) {
      fetchData(crypto1);
    }
    if (crypto2) {
      fetchData(crypto2);
    }
  }, [crypto1, crypto2]);

  useEffect(() => {
    setIsLoading(true);
    fetchPrice(priceType);
  }, [days]);

  async function fetchData(id) {
    if (id === crypto1) {
      let data = await getCoinDataApi(id);
      convertCoinData(setCrypto1Data, data, currency.toLowerCase());
      let priceData1 = await getPriceDataApi(id, currency, days,priceType);
      let priceData2 = await getPriceDataApi(crypto2, currency, days, priceType);
      setCrypto1Price(priceData1);
      if (priceData1 && priceData2) {
        console.log(priceData1, priceData2);
        setChartDataFunc(setChartData, id, priceData1, crypto2, priceData2);
      }
    }
    if (id === crypto2) {
      let data = await getCoinDataApi(id);
      convertCoinData(setCrypto2Data, data, currency.toLowerCase());
      let priceData2 = await getPriceDataApi(id, currency, days, priceType);
      let priceData1 = await getPriceDataApi(crypto1, currency, days,priceType);
      setCrypto2Price(priceData2);
      if (priceData2 && priceData1) {
        console.log(priceData1, priceData2);
        setChartDataFunc(setChartData, crypto1, priceData1, id, priceData2);
        setIsLoading(false);
      }
    }
  }

  async function fetchPrice(newType) {
    let priceData1 = await getPriceDataApi(crypto1, currency, days, newType);
    let priceData2 = await getPriceDataApi(crypto2, currency, days, newType);
    setCrypto2Price(priceData2);
    setCrypto1Price(priceData1);
    if (priceData1 && priceData2) {
      setIsLoading(false);
      setChartDataFunc(setChartData, crypto1, priceData1, crypto2, priceData2);
    }
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    fetchPrice(newType);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="compare">
            <SelectCoins
              currency={currency}
              crypto1={crypto1}
              crypto2={crypto2}
              setCrypto1={setCrypto1}
              setCrypto2={setCrypto2}
            />
            <FilterComponent
              val={days}
              setVal={setDays}
              itemList={daysList}
              label={"Days"}
              flag={false}
              className="filter"
            />
          </div>
          <div className="listLayout-compare">
            <ListLayout coin={crypto1Data} currency={currency} />
            <ListLayout coin={crypto2Data} currency={currency} />
          </div>
          <div className="Toggle">
          <DataToggle  
              priceType={priceType} 
              setPriceType={setPriceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
          </div>
          <Chart
            chartData={chartData}
            priceType={"prices"}
            multiAxis={true}
            curr={currency}
          />
          <CoinInfo name={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo name={crypto2Data.name} desc={crypto2Data.desc} />
          
      <Footer />
        </>
      )}
    </div>
  );
};

export default ComparePage;
