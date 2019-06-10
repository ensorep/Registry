import React from "react"

function sortView(value){
  console.log(value)
}


export default () => ( 
  <div className="filter">
    <div className="filter_view">
      <h3 className="filter_view-title">View</h3>
      <input onClick={sortView('all')} className="filter_view-item" type="radio" name="view" value="All"/>
        <label className="filter_view-all" htmlFor="view">All</label><br/>
      <input onClick={sortView('avaialable')} className="filter_view-item" type="radio" name="view" value="Available"/>
        <label className="filter_view-avail" htmlFor="view">Available</label><br/>
      <input onClick={sortView('purchased')} className="filter_view-item" type="radio" name="view" value="Purchased"/>
        <label className="filter_view-res" htmlFor="view">Reserved / Purchased</label><br/>
    </div>

    <div className="filter_price">
    <h3 className="filter_view-title">Price</h3>
      <input className="filter_price-item" type="radio" name="price" value="under50"/>
        <label className="filter_price-low" htmlFor="price">Under $50</label><br/>
      <input className="filter_price-item" type="radio" name="price" value="50to100"/>
        <label className="filter_price-low" htmlFor="price">$50 - $100</label><br/>
      <input className="filter_price-item" type="radio" name="price" value="over100"/>
        <label className="filter_price-low" htmlFor="price">$100+</label><br/>
    </div>
  </div>
  )