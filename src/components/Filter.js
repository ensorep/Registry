import React from "react"

function showAll() {
  document.getElementById("purchased").classList.remove("activeFilter");
  document.getElementById("available").classList.remove("activeFilter");
  document.getElementById("all").classList.add("activeFilter");
 let items = document.getElementsByClassName("item")
 for(let i in items){
   if(items[i].classList){
    items[i].classList.remove("hide");
    items[i].classList.add("showf");
   } 
 }
}

function showPurchased() {
  document.getElementById("all").classList.remove("activeFilter");
  document.getElementById("available").classList.remove("activeFilter");
  document.getElementById("purchased").classList.add("activeFilter");
  

  let items = document.getElementsByClassName("item")
  for(let i in items){
    let itemClass = items[i].classList;
    if(itemClass){
      itemClass.remove("hide");
        if(items[i].dataset.available !== "purchased"){
          itemClass.add("hide")
      }
    }
  } 
}

function showavailable() {
  document.getElementById("purchased").classList.remove("activeFilter");
  document.getElementById("all").classList.remove("activeFilter");
  document.getElementById("available").classList.add("activeFilter");
  let items = document.getElementsByClassName("item")
  for(let i in items){
    let itemClass = items[i].classList;
    if(itemClass){
      itemClass.remove("hide");
        if(items[i].dataset.available !== "available"){
          itemClass.add("hide")
      }
    }
  } 
}

export default () => ( 
  <div id="filter" className="filter">
  <ul className="filter_ul">
    <li id="all" onClick={showAll} className="filter_all">All</li>
    <li id="purchased" onClick={showPurchased}
      className="filter_purchased">Purchased</li>
    <li id="available" onClick={showavailable}
      className="filter_available">Available</li>
  </ul>
</div>
  )