const calculate = (actualprice, dicountedPrice) => {
  let price = actualprice - dicountedPrice;
  return price;
};

let allDiscountedPrices = []; 
/**
 * allDiscountedPrices = [500 , 50 , 60 , 5]
 * 
 */
for (let i = 0; i < 4; i++) {
  let act = document.querySelectorAll(".actual-price")[i].innerHTML;
  let disc = document.querySelectorAll(".discount-price")[i].innerHTML;
  let result = calculate(act, disc);
  allDiscountedPrices.push(result);
}
for(let i = 0; i < allDiscountedPrices.length;i++)
{
    let discount = document.querySelectorAll(".discount")[i];
    discount.innerHTML = allDiscountedPrices[i];
}

