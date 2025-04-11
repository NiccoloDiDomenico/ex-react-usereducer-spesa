import { useState, useReducer } from 'react'

const cartReducer = (cart, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const isProductAdded = cart.some((p) => p.name === action.payload.name);
      if (!isProductAdded) {
        return [...cart, {
          ...action.payload,
          quantity: 1
        }];
      } else {
        return cart.map(p => {
          if (p.name === action.payload.name) {
            return {
              ...p,
              quantity: p.quantity + 1
            }
          }
          return p;
        })
      }
    case 'REMOVE_ITEM':
      return cart.filter((p) => p.name !== action.payload.name)
    case 'UPDATE_QUANTITY':
      return cart.map((p) => {
        if (p.name === action.payload.name) {
          return {
            ...p,
            quantity: parseInt(action.payload.quantity)
          }
        }
        return p;
      })
    default:
      return cart;
  }
}

function App() {
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ]

  const [cart, dispatchCart] = useReducer(cartReducer, [])

  // const [addedProducts, setAddedProducts] = useState([])
  // console.log(addedProducts);

  // const addToCart = (productToAdd) => {
  //   const isProductAdded = addedProducts.some((p) => p.name === productToAdd.name);
  //   if (!isProductAdded) {
  //     setAddedProducts((curr) => [...curr, {
  //       ...productToAdd,
  //       quantity: 1
  //     }]);
  //   } else {
  //     updateProductQuantity(productToAdd);
  //   };
  // }

  // const updateProductQuantity = (productToUpdate, newQuantity) => {
  //   setAddedProducts(curr =>
  //     curr.map((p) => {
  //       if (p.name === productToUpdate.name) {
  //         return {
  //           ...p,
  //           quantity: newQuantity ? parseInt(newQuantity) : p.quantity + 1
  //         }
  //       }
  //       return p;
  //     })
  //   );
  // }

  // const removeFromCart = (productToRemoved) => {
  //   setAddedProducts((curr) =>
  //     curr.filter((p) => p.name !== productToRemoved.name)
  //   );
  // }

  const totalPrice = cart.reduce((acc, p) => {
    return acc + (p.price * p.quantity)
  }, 0)

  return (
    <>
      <h3>Lista della spesa</h3>
      <ol>
        {products.map((p, i) => (
          <li key={i}>
            <span>{p.name}, {p.price.toFixed(2)}€</span>
            <button onClick={() => dispatchCart({ type: 'ADD_ITEM', payload: p })}>Aggiungi al carrello</button>
          </li>
        ))}
      </ol>
      {
        cart.length > 0 ? (
          <>
            <h3>Carrello</h3>
            <ol>
              {cart.map((p, i) => (
                <li key={i}>
                  <label htmlFor="quantity">Quantità: </label>
                  <input type="number" id='quantity' value={p.quantity} onChange={(e) => dispatchCart({ type: 'UPDATE_QUANTITY', payload: { name: p.name, quantity: e.target.value } })} min="1" />
                  <span>Articolo: {p.name}, Prezzo: {p.price.toFixed(2)}€</span>
                  <button onClick={() => dispatchCart({ type: 'REMOVE_ITEM', payload: p })}>Rimuovi dal carrello</button>
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

