import React from "react"
import ReactDOM from "react-dom"
import Index from "../pages/index"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import firebase from "firebase/app"
import 'firebase/database'


function toFirebase(title) {
  let note = document.getElementById("note").value
  let name = document.getElementById("name").value
  let update = {available: false, name: name, note: note}
  if(title === "Donation"){
  update.available = true
  let x = Math.floor(Math.random() * 10000)
  firebase.database().ref(`/items/${title}/${x}`).update(update)
  }
  else {
    firebase.database().ref(`/items/${title}`).update(update)
  }
}


function Rebuild() {
  document.getElementById("modal").classList.add("hide");
  document.getElementById("modal").classList.remove("show");
  ReactDOM.render(
    <Index/>,
    document.getElementById("___gatsby")
  )
}

class Modal extends React.Component {
  render(){
    return (
      <div id="modal" className="modal">
      <div className="modal_header">
        <h3>{this.props.title}</h3>
        <FontAwesomeIcon
          onClick={Rebuild}
          className="icon-close"
          icon="times"
          />
      </div>
      <div className="modal_main">
        <img  className="item-image" src={this.props.imgsrc} alt={this.props.title} />
        <p>Please enter your name to confirm </p>
        <div id="modal_donation" className="modal_donation">
          <a href="paypal.me/PetersonRegistry2019">
            <p id="modal_donation-text">Donate via paypal</p>
          </a>
        </div>
       
        <input id="name" className="modal_input-name" type="text" placeholder="Enter your name" required></input>
        <textarea id="note" className="modal_input-note" type="text"  placeholder="Add an optional note"></textarea>
        <button onClick={()=>toFirebase(this.props.title)} className="modal_button-submit">Confirm Gift</button>
      </div>
    </div>
    )
  }
}
