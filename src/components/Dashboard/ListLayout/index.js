import React, { useState } from "react";
import "./style.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Tooltip from "@mui/material/Tooltip";
import convertNumber from "../../../functions/convertNumber";
import { Link } from 'react-router-dom';
import { IconButton } from "@mui/material";
import { isWishListed } from "../../../functions/isWishListed";
import { removeFromWishList } from "../../../functions/removeFromWishList";
import { addToWishList } from "../../../functions/addToWishList";

const ListLayout = ({ coin, currency,isWishList }) => {
  const [added, setAdded] = useState(isWishListed(coin.id));


  return (
    
    <tr
      className={
        coin.price_change_percentage_24h >= 0
          ? "listContainer listContainer-green"
          : "listContainer"
      }
      style={{ display: isWishList && !added && "none" }}
    >
      <td className="info-list">
        <img className="coin-logo-list" src={coin.image} alt="" />
        <Link to={`/coin/${coin.id}`} >
          <div className="name-list">
            <p className="symbol-list">{coin.symbol}</p>
            <p className="coin-name-list">{coin.name}</p>
          </div>
        </Link>
      </td>

      {coin.price_change_percentage_24h >= 0 ? (
        <td className="coin-detail-list">
          <Tooltip title="Price change in 24hrs" placement="bottom-start">
            <div className="percentChangeGreen-list">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          </Tooltip>
          <TrendingUpRoundedIcon className="icon-green-list icon" />
          <Tooltip title="Current Price" placement="bottom-start">
            <div className="price-list up">
              {coin.current_price} {currency}
            </div>
          </Tooltip>
        </td>
      ) : (
        <td className="coin-detail-list">
          <Tooltip title="Price change in 24hrs" placement="bottom-start">
            <div className="percentChangeRed-list">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          </Tooltip>
          <TrendingDownRoundedIcon className="icon-red-list icon" />
          <Tooltip title="Current Price" placement="bottom-start">
            <div className="price-list down">
              {coin.current_price} {currency}
            </div>
          </Tooltip>
        </td>
      )}

      {/* desktop view */}
      <Tooltip title="Total Volume" placement="bottom-end">
        <td className="list desktop-list">
          <p>{coin.total_volume.toLocaleString()}</p>
        </td>
      </Tooltip>

       {/* mobile view */}
      <Tooltip title="Total Volume" placement="bottom-end">
        <td className="list mobile-list mobile-list-vol">
          <p>${convertNumber(coin.total_volume.toLocaleString())}</p>
        </td>
      </Tooltip>

       {/* desktop view */}
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="list desktop-list">
          <p>{coin.market_cap.toLocaleString()}</p>
        </td>
      </Tooltip>

       {/* mobile view */}
      <Tooltip title="Market Cap" placement="bottom-end">
        <td className="list mobile-list mobile-list-cap">
          <p>${convertNumber(coin.market_cap.toLocaleString())}</p>
        </td>
      </Tooltip>
      <td style={{ width: "fit-content" }}>
      <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWishList(coin.id);
                setAdded(false);
              } else {
                addToWishList(coin.id);
                setAdded(true);
              }
            }} 
          >
            {added ? (
              <StarRoundedIcon
                className={`wishlist-icon ${
                  coin.price_change_percentage_24h < 0 && "wishlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`wishlist-icon ${
                  coin.price_change_percentage_24h < 0 && "wishlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
        </td>

    </tr>
  );
};

export default ListLayout;
