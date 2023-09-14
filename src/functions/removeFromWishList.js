export const removeFromWishList = (id) => {
  if (window.confirm("Are you sure you want to remove this coin")) {
    let items = JSON.parse(localStorage.getItem("wishList"));
    localStorage.setItem(
      "wishList",
      JSON.stringify(items.filter((item) => item !== id))
    );
  }
};
