import React from "react"
import ReactDOM from "react-dom"
import Index from "../pages/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import firebase from "firebase/app"
import 'firebase/database'

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

function sendLove(){
	let love = document.getElementById('lovetext').value
	let sender = document.getElementById('lovesender').value
  let update = {note: love, name: sender}
  let x = Math.floor(Math.random() * 10000)
	firebase.database().ref(`/items/Donation/Love/${x}`).update(update)
	alert('Thank you for the love!')
	Rebuild()
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

	<div className="donation_love">
		<h4 id="love" onClick={toggleLove} className="donation_love-header">Love</h4>
		<div id="testArea" className="donation_love-content" >
		<input id="lovesender" type="text" placeholder="Enter Your Name If You Wish"></input>
		<textarea id="lovetext" placeholder="Write to heart's content"></textarea>
		<button onClick={sendLove}>Submit</button>
		</div>
	</div>

	<div id="other" onClick={toggleOther} className="donation_other">
		<h4 className="donation_other-header">Other</h4>
		<div id="testCon" className="donation_other-content">
			<p>If you'd like to donate second-hand items, a subscription, or something else, you may reach us at tao.rep@gmail.com</p>
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