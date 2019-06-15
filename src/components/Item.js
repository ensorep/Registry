import React from "react"
import  Modal  from "./modal"



function build(title, img) {
  return (
    <Modal 
      title = {title}
      image = {img}
    />
  )
}


const Item = props => (
  <div data-available={props.available} className="item">
    <h3 className="item-title">{props.title}</h3>
    <a href={props.src}>
    <img className="item-image" alt={props.title} src={props.imgsrc}/>
    </a>
    <h3 className="item-price">{props.price}</h3>
    <button onClick={()=>{build(props.title,props.imgsrc)}} className="item_button-give">Give this gift</button>
  </div>
)

export default Item;