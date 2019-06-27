import React from "react"
import ReactDOM from "react-dom"
import  Modal  from "./modal"
import Layout from "./Layout"
import Header from "./Header"
import Footer from "./Footer"
import Donation from "./Donation"

export function Build(title,imgsrc,availability){
  if(title !== "Donation"){
  ReactDOM.render(
  <Layout>
      <Header/>
      <Modal title={title} imgsrc ={imgsrc} available={availability}/>
      <Footer/>
  </Layout>,
    document.getElementById("___gatsby")
  )
  }
  else if(title === "Donation"){
    ReactDOM.render(
      <Layout>
        <Header/>
        <Donation/>
        <Footer/>
      </Layout>,
      document.getElementById("___gatsby")
    )
  }
}

export default props => (
  <div data-available={props.available} className="item">
    <h3 className="item-title">{props.title}</h3>
    <a href={props.src}>
    <img className="item-image" alt={props.title} src={props.imgsrc}/>
    </a>
    <h3 className="item-price">{props.price}</h3>
    <button onClick={()=>{Build(props.title,props.imgsrc,props.available)}} className="item_button-give">Give this gift</button>
  </div>
)







