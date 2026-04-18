import React from "react";

const CartItem = ({ cart, setCart }) => {
  // Increase quantity
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); // remove if 0

    setCart(updatedCart);
  };

  // Remove item completely
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {/* CART ITEMS */}
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                {/* QUANTITY CONTROLS */}
                <div className="quantity">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Subtotal: ₹{item.price * item.quantity}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <h2>Total: ₹{totalPrice}</h2>

          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartItem;
