import React, { useEffect, useState } from 'react'
import { get100CoinsApi } from '../../../functions/get100CoinsApi';
import FilterComponent from '../../Dashboard/FilterComponents';
import "./style.css"

const SelectCoins = ({currency,crypto1,setCrypto1,crypto2,setCrypto2}) => {
    const[allCoins,setAllCoins]= useState([]);

    useEffect(() => { 
        coins100();
      }, [currency]);
    
    
      const coins100=async()=>{
        let data=await get100CoinsApi(currency);
        if(data){
            let arr=data.map((item)=> item.id);
            setAllCoins(arr);
        }
      }


  return (
    <div className='SelectCoins'>
         <FilterComponent
              val={crypto1}
              setVal={setCrypto1}
              itemList={allCoins}
              label={"Crypto 1"}
              flag={false}
              className="filter"
        />
         <FilterComponent
              val={crypto2}
              setVal={setCrypto2}
              itemList={allCoins}
              label={"Crypto 2"}
              flag={false}
              className="filter"
        />
    </div>
  )
}

export default SelectCoins