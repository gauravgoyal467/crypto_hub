import React, { useEffect, useState } from "react";
import TabsComponents from "../components/Dashboard/TabsComponents";
import { get100CoinsApi } from "../functions/get100CoinsApi";
import {Link} from "react-router-dom"
import Loader from "../components/Common/Loader";
import Button from "../components/Common/Button";

const WatchListPage = ({currency}) => {
  const coins = JSON.parse(localStorage.getItem("wishList"));
  const [myWishList, setMyWishList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(myWishList);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const allCoins = await get100CoinsApi(currency);
    if (coins) {
      setMyWishList(allCoins.filter((item) => coins.includes(item.id)));
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {(myWishList.length === 0 || !coins) ? (
            <div>
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the WishList
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/dashboard">
                  <Button text={"Dashboard"} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <TabsComponents cryptoList={myWishList} currency={currency} isWishList={true} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default WatchListPage


