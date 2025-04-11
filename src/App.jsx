import { useState } from 'react'

function App() {
  const [addedProducts, setAddedProducts] = useState([])
  console.log(addedProducts);


  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ]

  const addToCart = (productToAdd) => {
    const isProductAdded = addedProducts.some((p) => p.name === productToAdd.name);
    if (!isProductAdded) {
      setAddedProducts((curr) => [...curr, {
        ...productToAdd,
        quantity: 1
      }]);
    } else {
      updateProductQuantity(productToAdd);
    };
  }

  const updateProductQuantity = (productToUpdate, newQuantity) => {
    setAddedProducts(curr =>
      curr.map((p) => {
        if (p.name === productToUpdate.name) {
          return {
            ...p,
            quantity: newQuantity
          }
        }
        return p;
      })
    );
  }

  const removeFromCart = (productToRemoved) => {
    setAddedProducts((curr) =>
      curr.filter((p) => p.name !== productToRemoved.name)
    );
  }

  const totalPrice = addedProducts.reduce((acc, p) => {
    return acc + (p.price * p.quantity)
  }, 0)

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
                  <label htmlFor="quantity">Quantità: </label>
                  <input type="number" id='quantity' value={p.quantity} onChange={(e) => updateProductQuantity(p, e.target.value)} min="1" />
                  <span>Articolo: {p.name}, Prezzo: {p.price.toFixed(2)}€</span>
                  <button onClick={() => removeFromCart(p)}>Rimuovi dal carrello</button>
                </li>
              ))}
              <span><strong>Totale spesa: {totalPrice.toFixed(2)}€</strong></span>
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

