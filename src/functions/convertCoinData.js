export const convertCoinData=(setState,data,currency)=>{    
    setState(
        {
            id:data.id,
            name:data.name,
            symbol:data.symbol,
            image:data.image.large,
            desc:data.description.en,
            price_change_percentage_24h:data.market_data.price_change_percentage_24h_in_currency[currency],
            total_volume:data.market_data.total_volume[currency],
            current_price:data.market_data.current_price[currency],
            market_cap:data.market_data.market_cap[currency]
        });
}