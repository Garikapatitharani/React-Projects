import sam from '../assets/Samsung.jpg'
import iphone from '../assets/iphone.jpg'
import oneplus from '../assets/oneplus.jpg'
import gp from '../assets/Google pixel.jpg'
import Hp from '../assets/Hp.jpg'
import dell from '../assets/de.jpg'
import mb from '../assets/mac.jpg'
import len from '../assets/lenovo.jpg'
import sony from '../assets/sony.jpg'
import bose from '../assets/bose.jpg'
import boat from '../assets/boat.jpg'
import jbl from '../assets/jbl.jpg'
import fitbit from '../assets/fitbit.jpg'
import sg from '../assets/sg.jpg'
import noise from '../assets/noise.jpg'
import apple from '../assets/Apple.jpg'



export const electronicsProducts = [
  // Smartphones
  {
    id: 1,
    image: sam,
    category: "Smartphones",
    description: "Samsung Galaxy S21 with 128GB storage",
    quantity: 15,
    price:'45000',
    inStock: true,
  },
  {
    id: 2,
    image: iphone,
    category: "Smartphones",
    description: "Apple iPhone 14 Pro Max 256GB",
    quantity: 0,
    inStock: false,
    price:'79,999'
  },
  {
    id: 3,
    image: oneplus,
    category: "Smartphones",
    description: "OnePlus 11R with 12GB RAM and 256GB storage",
    quantity: 8,
    price:'69,999',
    inStock: true,
  },
  {
    id: 4,
    image: gp,
    category: "Smartphones",
    description: "Google Pixel 7a with clean Android experience",
    quantity: 5,
    price:'55,999',
    inStock: true
  },

  // Laptops
  {
    id: 5,
    image: Hp,
    category: "Laptops",
    description: "HP Pavilion 15 with Intel i5 11th Gen",
    quantity: 0,
    price:'39,999',
    inStock: false
  },
  {
    id: 6,
    image: dell,
    category: "Laptops",
    description: "Dell Inspiron 14 with AMD Ryzen 7",
    quantity: 10,
    price:'35,999',
    inStock: true
  },
  {
    id: 7,
    image: mb,
    category: "Laptops",
    description: "Apple MacBook Air M2, 13-inch Retina display",
    quantity: 7,
    price:'85,999',
    inStock: true
  },
  {
    id: 8,
    image: len,
    category: "Laptops",
    description: "Lenovo Legion 5 Gaming Laptop with RTX 3060",
    quantity: 3,
    price:'35,999',
    inStock: true
  },

  // Headphones
  {
    id: 9,
    image: sony,
    category: "HeadPhones",
    description: "Sony WH-1000XM5 Noise Cancelling Headphones",
    quantity: 20,
    price:'999',
    inStock: true
  },
  {
    id: 10,
    image: bose,
    category: "HeadPhones",
    description: "Bose QuietComfort 45 Wireless Headphones",
    quantity: 0,
    price:'1999',
    inStock: false
  },
  {
    id: 11,
    image: boat,
    category: "HeadPhones",
    description: "JBL Tune 510BT On-Ear Bluetooth Headphones",
    quantity: 12,
    price:'1599',
    inStock: true
  },
  {
    id: 12,
    image: jbl,
    category: "HeadPhones",
    description: "Boat Rockerz 550 with HD Sound and Bass",
    quantity: 9,
    price:'1899',
    inStock: true
  },

  // Smartwatches
  {
    id: 13,
    image: fitbit,
    category: "Smartwatches",
    description: "Apple Watch Series 9 with health tracking",
    quantity: 4,
    price:'2459',
    inStock: true
  },
  {
    id: 14,
    image: sg,
    category: "Smartwatches",
    description: "Samsung Galaxy Watch 6 with AMOLED display",
    quantity: 0,
    price:'3099',
    inStock: false
  },
  {
    id: 15,
    image: noise,
    category: "Smartwatches",
    description: "Noise ColorFit Pulse with SpO2 monitoring",
    quantity: 18,
    price:'1499',
    inStock: true
  },
  {
    id: 16,
    image: apple,
    category: "Smartwatches",
    description: "Fitbit Versa 3 with built-in GPS",
    quantity: 6,
    price:'1590',
    inStock: true
  }
];
