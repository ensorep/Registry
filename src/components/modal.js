import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default () => (
  <div className="modal">
    <div className="modal_header">
      <h3>Thank you!</h3>
      <FontAwesomeIcon
        className="icon-close"
        icon="times"
        />
    </div>
    <div className="modal_main">
      <p>We appreciate you for considering us. Please enter your name and click confirm to lock in your purchase (this will remove it from the registry).</p>
      <input className="modal_input-name" type="text" placeholder="Please enter your name">
      </input>
      <button className="modal_button-submit">Confirm Purchase</button>
    </div>
  </div>
)