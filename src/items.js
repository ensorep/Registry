const items = [
  
    {
      key: 1,
      title: 'Donation',
      price:0,
      imgsrc: 'https://garfieldparkacademy.org/wp-content/uploads/2018/04/hand_heart_donate_icon.png',
      // available: true,
    },
  
    // {
    //   key: 2,
    //   id: ()=>items[1].title.split(' ')[0]+'item',
    //   title: 'Graco 4ever 4-in-1 Convertible Car Seat',
    //   price: 199,
    //   src: () =>items[1].title.split(" ").map(item=>item=`${item}+`).join(''),
    //   imgsrc:'https://i5.walmartimages.com/asr/59fdc611-05bb-4143-b8f3-bc32d9f3b80b_1.7676396e5c290986864e918027772f94.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    //   // available: true,
    // },
  
    {
      key: 2,
      title: 'Britax B Agile & B Safe 35 Travel System (Used)',
      price: 250,
      imgsrc:'https://m.media-amazon.com/images/I/715SuAPJ86L._AC_UL436_.jpg',
      // available: true,
    },
  
    // {
    //   key: 3,
    //   id: ()=>items[2].title.split(' ')[0]+'item',
    //   title: 'Baby Jogger City Mini',
    //   price: 150,
    //   src: () => items[2].title.split(' ').map(item=>item=`${item}+`).join(''),
    //   imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/81H3lgWOVZL._SY355_.jpg',
    //   // available: true,
    // },
  
    {
      key: 3,
      title: 'Skip Hop Messenger Diaper Bag',
      price: 50,
      imgsrc:'https://images-na.ssl-images-amazon.com/images/I/81U2VINB1zL._SX522_.jpg',
      // available: true,
    },
  
    {
      key: 4,
      title: 'Nanit Plus Baby Monitor',
      price: 300,
      imgsrc: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6304/6304010_sd.jpg',
      // available: true,
    },
  
    {
      key: 5,
      title: 'DaVinci Jenny Lind Stationary Crib',
      price: 200,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71XfKS8ekbL._SX355_.jpg',
      // available: true,
    },
  
    {
      key: 6,
      title: 'Fisher-Price Soothing Motions Bassinet (Used)',
      price: 120,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71pNJZruC4L._SX522_.jpg',
      // available: true,
    },
  
    // {
    //   key: 6,
    //   id: ()=>items[5].title.split(' ')[0]+'item',
    //   title: 'Hiccapop Wipe Warmer',
    //   price: 35,
    //   src: () => items[5].title.split(' ').map(item=>item=`${item}+`).join(''),
    //   imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/51myePjoXZL._SX522_.jpg',
    //   // available: true,
    // },
  
    {
      key: 7,
      title: 'Stainless Steel Trash Can',
      price: 20,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71-NUBwRe5L._SL1500_.jpg',
      // available: true,
    },
  
    {
      key: 8,
      title: 'The Honest Company Baby Wipes',
      price: 20,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71Vv6Mb61JL._SX522_.jpg',
      // available: true,
    },
  
    {
      key: 9,
      title: 'Philips Avent Natural Glass Bottle Baby Gift Set',
      price: 45,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/81Jl30M3kGL._SX522_.jpg',
      // available: true,
    },
  
    {
      key: 10,
      title: 'Philips Avent Drying Rack',
      price: 15,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71zN-SbE0lL._SX522_.jpg',
      // available: true,
    },
  
    {
      key: 11,
      title: 'Boon Care Health and Grooming Kit',
      price: 25,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/81xuiQWSDOL._SX522_.jpg',
      // available: true,
    },
  
  
  
  
    // {
    //   key: 6,
    //   id: ()=>items[5].title.split(' ')[0]+'item',
    //   title: 'TEST',
    //   price: 10,
    //   src: () => items[5].title.split(' ').map(item=>item=`${item}+`).join(''),
    //   imgsrc: '',
    //   // available: true,
    // },
  
  
    {
      key: 12,
      id: ()=>items[11].title.split(' ')[0]+'item',
      title: 'Nature Babycare Diapers (25ct)',
      price: 10,
      imgsrc: 'https://www.naty.com/on/demandware.static/-/Sites-naty-catalog/default/dw72ddcce7/Products/diapering/2018/diaper-newborn-singlepack-2018/large-650x650/8178341_Baby-Diapers-Single-Pack-Size-Newborn_01_large.png',
      // available: true,
    },
  
    {
      key: 13,
      id: ()=>items[12].title.split(' ')[0]+'item',
      title: 'Brooklyn Bamboo Burp Cloths (3ct)',
      price: 20,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/813GerEeKeL._SX522_.jpg',
      // available: true,
    },
  
    {
      key: 14,
      id: ()=>items[13].title.split(' ')[0]+'item',
      title: `Dr. Brown's Bottle Starter Pack`,
      price: 30,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/815%2BcwINFWL._SL1500_.jpg',
    },
  
    {
      key: 15,
      id: ()=>items[14].title.split(' ')[0]+'item',
      title: 'Just Hatched Baby Body Lotion',
      price: 25,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71f8LFzywaL._SL1500_.jpg',
    },
  
    {
      key: 16,
      id: ()=>items[15].title.split(' ')[0]+'item',
      title: 'Babyganics Shampoo + Body Wash (Fragrence Free)',
      price: 10,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/511oiy654-L._SL1011_.jpg',
    },
  
    {
      key: 17,
      id: ()=>items[16].title.split(' ')[0]+'item',
      title: 'Levoit Air Purifier',
      price: 70,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/71HbEN4E9EL._SL1500_.jpg',
    },
    {
      key: 18,
      id: ()=>items[17].title.split(' ')[0]+'item',
      title: 'EcoNursing Washable Pads (12cm)',
      price: 15,
      imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/81EMJZ8j1EL._SL1500_.jpg',
    },
  ]
  
  export {items as default}