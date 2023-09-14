export const isWishListed=(id)=>{
    const coinsList = localStorage.getItem("wishList");
  if (coinsList) {
    let arr = JSON.parse(coinsList);
    if (arr.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}  
