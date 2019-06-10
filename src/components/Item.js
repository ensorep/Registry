import React from "react"

export default props => (
  <div data-available={props.available} className="item">
    <h3 className="item-title">{props.title}</h3>
    <a href={props.src}>
    <img className="item-image" alt="" src={props.imgsrc}/>
    </a>
    <h3 className="item-price">{props.price}</h3>
    <button className="item_button-give">Give this gift</button>
  </div>
)