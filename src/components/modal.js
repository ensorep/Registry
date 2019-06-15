import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import firebase from "firebase/app"
import 'firebase/database'


function toFirebase(title) {
  console.log(title)
  let update = {itemName: {available: false}}
  firebase.database().ref("/items").update(update)
}

function closeModal() {
  document.getElementById("modal").classList.add("hide");
  document.getElementById("modal").classList.remove("show");
}


export default props => (
  <div id="modal" className="modal">
    <div className="modal_header">
      <h3>{props.title}</h3>
      <FontAwesomeIcon
        onClick={closeModal}
        className="icon-close"
        icon="times"
        />
    </div>
    <div className="modal_main">
      <img src="" alt="" />
      <p>Please enter your name & email to confirm </p>
      <input className="modal_input-name" type="text" placeholder="Please enter your name"></input>
      <input type="checkbox" name="anon"/><label htmlFor="anon">Keep my gift a surprise </label>
      <button onClick={()=>toFirebase(props.title)} className="modal_button-submit">Confirm Purchase</button>
    </div>
  </div>
)