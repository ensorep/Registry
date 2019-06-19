import React from "react"
import Header from "../components/Header"
import Item from "../components/Item"
import Filter from "../components/Filter"
import Footer from "../components/Footer"
import firebase from "firebase/app"
import Layout from "../components/Layout"


import 'firebase/database';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faDirections,faMoon,faStar, faBars, faTimes, } from '@fortawesome/free-solid-svg-icons';

library.add(faInfoCircle, faDirections, faStar, faMoon, faBars, faTimes);

var firebaseConfig = {
  apiKey: "AIzaSyBCXAMZbtLWLriDfqU1I6E01B09hk7taoU",
  authDomain: "fir-registry-4ae92.firebaseapp.com",
  databaseURL: "https://fir-registry-4ae92.firebaseio.com",
  projectId: "fir-registry-4ae92",
  storageBucket: "fir-registry-4ae92.appspot.com",
  messagingSenderId: "844241222482",
  appId: "1:844241222482:web:03b5e21c510cecd9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database()
const rootRef = db.ref();
rootRef.on("value",snapshot => {
  console.log(snapshot.val())
})
const google = "https://google.com/search?q="
const items = [
  {
    id: 1,
    title: 'Graco 4ever 4-in-1 Convertible Car Seat',
    price: 199,
    src: () =>items[0].title.split(" ").map(item=>item=`${item}+`).join(''),
    imgsrc:'https://i5.walmartimages.com/asr/59fdc611-05bb-4143-b8f3-bc32d9f3b80b_1.7676396e5c290986864e918027772f94.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    available: true,
  },

  {
    id: 2,
    title: 'Baby Jogger City Mini',
    price: 150,
    src: () => items[1].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/81H3lgWOVZL._SY355_.jpg',
    available: true,
  },

  {
    id: 3,
    title: 'Nanit Plus Baby Monitor',
    price: 300,
    src: () => items[2].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6304/6304010_sd.jpg',
    available: true,
  },

  {
    id: 4,
    title: 'DaVinci Jenny Lind Stationary Crib',
    price: 200,
    src: () => items[3].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71XfKS8ekbL._SX355_.jpg',
    available: true,
  },

  {
    id: 5,
    title: 'Nature Babycare Diapers (25ct)',
    price: 10,
    src: () => items[4].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'https://www.naty.com/on/demandware.static/-/Sites-naty-catalog/default/dw72ddcce7/Products/diapering/2018/diaper-newborn-singlepack-2018/large-650x650/8178341_Baby-Diapers-Single-Pack-Size-Newborn_01_large.png',
    available: true,
  },

  {
    id: 6,
    title: '',
    price: 10,
    src: () => items[4].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: '',
    available: true,
  },


  {
    id: 7,
    title: 'Donation',
    price: '0',
    src: () => items[6].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'https://garfieldparkacademy.org/wp-content/uploads/2018/04/hand_heart_donate_icon.png',
    available: true,
  },
]


function getItems() {
  return (
    items.map(item=>{
      return( 
        <Item
          key = {item.id}
          title={item.title}
          price={`$${item.price}`}
          src={`${google}${item.src()}&tbm=shop`}
          imgsrc={item.imgsrc}
          available={item.available}
        />
      ) 
    })
  )
}

export default () => (
<Layout>
  <Header/>
  <div className ="item_wrapper">
    {getItems()}
  </div>
  <Filter/>
  <Footer/>
</Layout>
)