import React from "react"
import ReactDOM from "react-dom"
import Index from "../pages/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import firebase from "firebase/app"
import 'firebase/database'

function updateItem(title,name,note){
  let update = {title: title, name: name, note: note}
  if(title === "Donation"){
    let x = Math.floor(Math.random() * 10000)
    firebase.database().ref(`/items/${title}/${x}`).update(update)
  }
  else {
    firebase.database().ref(`/items/${title}`).update(update)
  }
  alert(`Thank you: ${title} has been marked as unavailable.`)
}


function isAvailable(title) {
  let note = document.getElementById("note").value
  let name = document.getElementById("name").value

  //if Confirm Gift was pressed
  if(document.getElementById("button").classList.contains('available')){
    if(name){
      console.log("submit item")
      updateItem(title,name,note)
    }
    else{
      console.log("not submitted")
      document.getElementById("name").classList.add('enterName')
      document.getElementById("namePrompt").classList.add('modal_button-availability-false')
    }
  }
  else {
    firebase.database().ref().on("value", snapshot => {
      if(snapshot.val().items[title] && !document.getElementById("name").classList.contains("show")) {
        document.getElementById("spanUnavail").classList.add("modal_button-availability-false","show")
      }
      else {
        document.getElementById("spanUnavail").classList.remove("show")
        document.getElementById("spanUnavail").classList.add("hide")
        document.getElementById("note").classList.add("show")
        document.getElementById("name").classList.add("show")
        document.getElementById("namePrompt").classList.add("show")
        document.getElementById("spanAvail").classList.add("modal_button-availability-true")
        document.getElementById("spanCheck").classList.add("hide")
        document.getElementById("spanAvail").classList.add("show")
        document.getElementById("confirm").classList.add("show")
        document.getElementById("button").classList.add("available")
        console.log("this item is available")
      }
    })
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

export default props => (
  <div id="modal" className="modal">
  <div className="modal_header">
    <h3>{props.title}</h3>
    <FontAwesomeIcon
      onClick={Rebuild}
      className="icon-close"
      icon="times"
      />
  </div>
  <div className="modal_main">
    <img  className="item-image" src={props.imgsrc} alt={props.title} />
    <span id="spanAvail" className="availtext">This item is available!</span>
    <p id="namePrompt" className="name-p">Please enter your name to confirm </p>
    <form>
    <input id="name" className="modal_input-name" type="text" placeholder="Enter your name" required></input>
    <textarea id="note" className="modal_input-note" type="text"  placeholder="Add an optional note"></textarea>
    <span id="spanUnavail" className="unavailtext">Sorry, This item is not available</span>
    <button type="button" id="button" onClick={()=>isAvailable(props.title)} className="modal_button-availability">
      <span id="spanCheck">Check Availability</span>
      <span id="confirm" className="modal_button-availability-confirm">Confirm Gift</span>
    </button>
    </form>
  </div>
</div>
)
