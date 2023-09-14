import React, { useEffect, useState } from "react";
import TabsComponents from "../components/Dashboard/TabsComponents";

import FilterComponent from "../components/Dashboard/FilterComponents";
import Search from "../components/Search";
import PaginationComp from "../components/PaginationComp";
import Loader from "../components/Common/Loader";
import { get100CoinsApi } from "../functions/get100CoinsApi";
import Footer from "../components/Common/Footer";
// import MoveToTop from "../components/Common/MoveToTop";

const DashboardPage = ({ currency, setCurrency }) => {
  const [crypto, setCrypto] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(crypto.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredCoin = crypto.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  const currencyList = [
    "USD - US Dollar",
    "IDR - Indonesian Rupiah",
    "TWD - New Taiwan Dollar",
    "EUR - Euro",
    "KRW - South Korean Won",
    "JPY - Japanese Yen",
    "RUB - Russian Ruble",
    "CNY - Chinese Yuan",
    "AED - United Arab Emirates Dirham",
    "ARS - Argentine Peso",
    "AUD - Australian Dollar",
    "BDT - Bangladeshi Taka",
    "BHD - Bahraini Dinar",
    "BMD - Bermudian Dollar",
    "BRL - Brazil Real",
    "CAD - Canadian Dollar",
    "CHF - Swiss Franc",
    "CLP - Chilean Peso",
    "CZK - Czech Koruna",
    "DKK - Danish Krone",
    "GBP -British Pound Sterling",
    "HKD - Hong Kong Dollar",
    "HUF - Hungarian Forint",
    "ILS - Israeli New Shekel",
    "INR - Indian Rupee",
    "KWD - Kuwaiti Dinar",
    "LKR - Sri Lankan Rupee",
    "MMK - Burmese Kyat",
    "MXN - Mexican Peso",
    "MYR - Malaysian Ringgit",
    "NGN - Nigerian Naira",
    "NOK - Norwegian Krone",
    "NZD - New Zealand Dollar",
    "PHP - Philippine Peso",
    "PKR - Pakistani Rupee",
    "PLN - Polish Zloty",
    "SAR - Saudi Riyal",
    "SEK - Swedish Krona",
    "SGD - Singapore Dollar",
    "THB - Thai Baht",
    "TRY - Turkish Lira",
    "UAH - Ukrainian hryvnia",
    "VEF - Venezuelan bolivar fuerte",
    "VND - Vietnamese dong",
    "ZAR - South African Rand",
    "XDR - IMF Special Drawing Rights",
  ];

  useEffect(() => {
    setIsLoading(true);
    coins100();
  }, [currency]);

  console.log(crypto);

  const coins100 = async () => {
    let data = await get100CoinsApi(currency);
    if (data) {
      setCrypto(data);
      setPaginatedCoins(data.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="select">
        <Search search={search} onSearchChange={onSearchChange} />
        <FilterComponent
          val={currency}
          setVal={setCurrency}
          itemList={currencyList}
          label={"Currency"}
          flag={true}
          className="filter"
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TabsComponents
            cryptoList={search ? filteredCoin : paginatedCoins}
            currency={currency}
          />
          {!search && (
            <PaginationComp page={page} handlePageChange={handlePageChange} />
          )}
          {/* <MoveToTop/> */}
         
      <Footer />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
