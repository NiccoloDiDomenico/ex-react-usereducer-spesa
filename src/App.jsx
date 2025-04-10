import { useState } from 'react'

function App() {
  const [addedProducts, setAddedProducts] = useState([])
  console.log(addedProducts);


  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const addToCart = (product) => {
    const isProductAdded = addedProducts.some((p) => p.name === product.name);
    if (!isProductAdded) {
      setAddedProducts((curr) => [...curr, {
        ...product,
        quantity: 1
      }]);
    } else {
      return;
    };
  };

  return (
    <>
      <h3>Lista della spesa</h3>
      <ol>
        {products.map((p, i) => (
          <li key={i}>
            <span>{p.name}, {p.price.toFixed(2)}€</span>
            <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ol>
      {
        addedProducts.length > 0 ? (
          <>
            <h3>Carrello</h3>
            <ol>
              {addedProducts.map((p, i) => (
                <li key={i}>
                  <span>Articolo: {p.name}, Prezzo: {p.price.toFixed(2)}€, Quantità: {p.quantity}</span>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <h3>Carrello</h3>
            <p>Non ci sono elementi...</p>
          </>
        )
      }
    </>
  )
}

export default App

