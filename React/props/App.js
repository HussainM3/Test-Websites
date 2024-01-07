import React from 'react';
import Product from './Product'

function App() {
  return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" isCheap = {false} />;
}

// can also call Product component
// function App() {
//     return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
// }

export default App;