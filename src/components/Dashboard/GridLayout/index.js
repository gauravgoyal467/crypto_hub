import React,{useState} from "react";
import "./style.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { isWishListed } from "../../../functions/isWishListed";
import { removeFromWishList } from "../../../functions/removeFromWishList";
import { addToWishList } from "../../../functions/addToWishList";

const GridLayout = ({ coin, currency,isWishList }) => {
  const [added, setAdded] = useState(isWishListed(coin.id));

  return (
    <div
      className={
        coin.price_change_percentage_24h >= 0
          ? "gridContainer gridContainer-green"
          : "gridContainer"
      }
      style={{ display: isWishList && !added && "none" }}
    >
      <div className="title-coin">
        <div className="info">
          <img className="coin-logo" src={coin.image} alt="" />
          <Link to={`/coin/${coin.id}`}>
            <div className="name">
              <p className="symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </Link>
        </div>
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
      </div>

      {coin.price_change_percentage_24h >= 0 ? (
        <div>
          <div className="chip">
            <div className="percentChangeGreen">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <TrendingUpRoundedIcon className="icon-green" />
          </div>
          <div className="price up">
            {coin.current_price} {currency}
          </div>
        </div>
      ) : (
        <div>
          <div className="chip">
            <div className="percentChangeRed">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <TrendingDownRoundedIcon className="icon-red" />
          </div>
          <div className="price down">
            {coin.current_price} {currency}
          </div>
        </div>
      )}
      <div className="volume">
        <p>Total Vol : {coin.total_volume.toLocaleString()}</p>
        <p>MarketCap : {coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default GridLayout;
