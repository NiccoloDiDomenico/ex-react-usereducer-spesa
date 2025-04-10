import { useState } from 'react'

function App() {
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];


  return (
    <>
      <h3>Lista della spesa</h3>
      <ol>
        {products.map((p) => (
          <li>
            <span>{p.name}, {p.price.toFixed(2)}€</span>
          </li>
        ))}
      </ol>
    </>
  )
}

export default App
