import React from "react"
import ReactDOM from "react-dom"
import  Modal  from "./modal"
import Layout from "./Layout"
import Header from "./Header"
import Footer from "./Footer"

export function Build(title,imgsrc){
  ReactDOM.render(
  <Layout>
      <Header/>
      <Modal title={title} imgsrc ={imgsrc}/>
      <Footer/>
  </Layout>,
    document.getElementById("___gatsby")
  )
}

class Item extends React.Component {
  render(){
    return (
      <div data-available={this.props.available} className="item">
    <h3 className="item-title">{this.props.title}</h3>
    <a href={this.props.src}>
    <img className="item-image" alt={this.props.title} src={this.props.imgsrc}/>
    </a>
    <h3 className="item-price">{this.props.price}</h3>
    <button onClick={()=>{Build(this.props.title,this.props.imgsrc)}} className="item_button-give">Give this gift</button>
  </div>
    )
  }
}







