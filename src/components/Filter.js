import React from "react"

function underfifty() {
  document.getElementById("overhundred").classList.remove("activeFilter");
  document.getElementById("fiftytohundred").classList.remove("activeFilter");
  document.getElementById("underfifty").classList.add("activeFilter");
 let items = document.getElementsByClassName("item")
 for(let i in items){
  let item = items[i]
  if(item.classList){
    item.classList.remove('hide')
    if(item.dataset.price > 50){
      items[i].classList.add("hide")
    }
  }
  }
}

function fiftytohundred() {
  document.getElementById("underfifty").classList.remove("activeFilter");
  document.getElementById("overhundred").classList.remove("activeFilter");
  document.getElementById("fiftytohundred").classList.add("activeFilter");
  

  let items = document.getElementsByClassName("item")
  for(let i in items){
    let item = items[i]
    if(item.classList){
      item.classList.remove('hide')
      if(item.dataset.price > 100 || item.dataset.price < 50){
        items[i].classList.add("hide")
      }
    }
  }
}

function overhundred() {
  document.getElementById("underfifty").classList.remove("activeFilter");
  document.getElementById("fiftytohundred").classList.remove("activeFilter");
  document.getElementById("overhundred").classList.add("activeFilter");
  let items = document.getElementsByClassName("item")
  for(let i in items){
    let item = items[i]
    if(item.classList){
      item.classList.remove('hide')
      if(item.dataset.price < 100){
        items[i].classList.add("hide")
      }
    }
  }
} 


export default () => ( 
  <div id="filter" className="filter">
  <ul className="filter_ul">
    <li id="underfifty" onClick={underfifty} className="filter_all">under $50</li>
    <li id="fiftytohundred" onClick={fiftytohundred}
      className="filter_purchased">$50 - $100</li>
    <li id="overhundred" onClick={overhundred}
      className="filter_available">$100 +</li>
  </ul>
</div>
  )