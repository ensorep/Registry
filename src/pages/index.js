import React from "react"
import Header from "../components/Header"
import Item from "../components/Item"
import Filter from "../components/Filter"
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
    available: false,
  },

  {
    id: 3,
    title: 'Nanit Plus Baby Monitor',
    price: 200,
    src: () => items[2].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6304/6304010_sd.jpg',
    available: true,
  },

  {
    id: 4,
    title: 'DaVinci Jenny Lind Stationary Crib',
    price: 300,
    src: () => items[3].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71XfKS8ekbL._SX355_.jpg',
    available: true,
  },

  {
    id: 5,
    title: 'Donation',
    price: 'x',
    src: () => items[4].title.split(' ').map(item=>item=`${item}+`).join(''),
    imgsrc: 'null',
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
          src={`${google}${item.src()}`}
          imgsrc={item.imgsrc}
          available={item.available}
        />
      ) 
    })
  )
}

export default () => (
<div id="app">
<Header/>
<Filter/>
<div className ="item_wrapper">
  {getItems()}
</div>

</div>)
