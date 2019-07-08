import React, {Component} from "react"

import Header from "../components/Header"
import items from "../items"
import firebaseConfig from "../firebase"
import Item from "../components/Item"
import Filter from "../components/Filter"
import Footer from "../components/Footer"
import About from "../components/about"
import firebase from "firebase/app"
import Layout from "../components/Layout"
import 'firebase/database';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faDirections,faMoon,faStar, faBars, faTimes, faHeart, faQuestion, } from '@fortawesome/free-solid-svg-icons';
library.add(faInfoCircle, faDirections, faStar, faMoon, faBars, faTimes, faHeart, faQuestion);


// firebase.database().ref().on("value", snapshot => snapshot.val().items)

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const google = "https://google.com/search?q="



function getItems(){
return (
  items.map(item=>{
    return( 
      <Item
        key = {item.key}
        title={item.title}
        price={item.price}
        imgsrc={item.imgsrc}
        available={item.available}
      />
    ) 
  })
)
}

class Index extends Component {
  constructor() {
    super();
  //  firebase.database().ref().on("value", snapshot => this.state = snapshot.val().items)
  }

  render() {
    return (
    <Layout>
      <Header/>
      <div className ="item_wrapper">{getItems()}</div>
      <Filter/>
      <About/>
      <Footer/>
    </Layout>
    )
  }
}

export {Index as default}