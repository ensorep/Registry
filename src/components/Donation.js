import React from "react"
import ReactDOM from "react-dom"
import Index from "../pages/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Rebuild() {
    document.getElementById("modal").classList.add("hide");
    document.getElementById("modal").classList.remove("show");
    ReactDOM.render(
        <Index/>,
        document.getElementById("___gatsby")
    )
}

function toggleLove()  {
	let love = document.getElementById("testArea").classList
 if(love.contains("show")){
	 love.remove("show")
 }
 else{
	 love.add("show")
 }
}

function toggleOther() {
	let other = document.getElementById("testCon").classList
 if(other.contains("show")){
	 other.remove("show")
 }
 else{
	 other.add("show")
 }
}

export default () => (

<div id="modal" className="donation">
<div className="donation_header">
  <h3 className="donation-title">Donation</h3>
  <FontAwesomeIcon
    onClick={Rebuild}
    className="icon-close"
    icon="times"
    />
</div>
<div id="donation" className="donation_main">

	<div className="donation_paypal">
			<a href="https://paypal.me/PetersonRegistry2019">
				<h4 className="donation_paypal-header">Paypal</h4>
			</a>
	</div>

	<div className="donation_cashapp">
		<a href="https://cash.app/$Taorep">
			<h4 className="donation_cashapp-header">Cashapp</h4>
		</a>
	</div>

	<div id="love" onClick={toggleLove} className="donation_love">
		<h4 className="donation_love-header">Love</h4>
		<div id="testArea" className="donation_love-content" >
		<textarea placeholder="Write to heart's content"></textarea>
		<button>Submit</button>
		</div>
	</div>

	<div id="other" onClick={toggleOther} className="donation_other">
		<h4 className="donation_other-header">Other</h4>
		<div id="testCon" className="donation_other-content">
			<p>Test Content</p>
		</div>
	</div>

    {/* <a href="https://paypal.me/PetersonRegistry2019">
      <p className="donation-text">Donate via paypal</p>
    </a>
    <form>
     <input id="do-text" type="text" placeholder="Enter Your Name">Name</input>
    <textarea id="do-note" className="donation_note" placeholder="Add an optional note"></textarea>
    <button className="donation_button">Donate Gift</button>
    </form> */}
</div>
</div>
)