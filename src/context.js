import React, { useEffect, useState } from "react";
import data from "./data";

const getLocalStorage = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    setCartItems(getLocalStorage());
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (showModal) {
      setCartItems([]);
    }
  }, [showModal]);

  const addToCart = (id, amount) => {
    // checking if cart already contains the item
    // using for loop instead of the some() array method for better performance
    let found = false;
    for (let i = 0; i < cartItems.length; i++) {
      // item exists, update amount
      if (cartItems[i].id === id) {
        const newArray = cartItems.filter((cartItem) => {
          if (cartItem.id === id) {
            cartItem.quantity += amount;
          }
          return cartItem;
        });
        setCartItems(newArray);
        found = true;
        break;
      }
    }
    handleAdd({ found, id, amount });
  };

  const handleAdd = ({ found, id, amount }) => {
    if (!found) {
      setCartItems((prevState) => [
        ...prevState,
        ...data
          .filter((item) => {
            if (item.id === id) {
              return item;
            }
          })
          .map((item) => {
            const { id, img, name, price } = item;
            return { id, img, name, price, quantity: amount };
          }),
      ]);
    }
  };

  const addCartItemAmount = (id) => {
    const newArray = cartItems.filter((cartItem) => {
      if (cartItem.id === id) {
        if (cartItem.quantity === 10) {
          cartItem.quantity = 10;
        } else {
          cartItem.quantity += 1;
        }
      }
      return cartItem;
    });
    setCartItems(newArray);
  };

  const subtractCartItemAmount = (id) => {
    const newArray = cartItems.filter((cartItem) => {
      if (cartItem.id === id) {
        if (cartItem.quantity === 1) {
          cartItem.quantity = 1;
        } else {
          cartItem.quantity -= 1;
        }
      }
      return cartItem;
    });
    setCartItems(newArray);
  };

  const calcCartTotal = () => {
    return cartItems.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);
  };

  const calcTotalItemAmount = () => {
    return cartItems.reduce((total, item) => {
      total += 1 * item.quantity;
      return total;
    }, 0);
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  const clearCart = (id) => {
    setCartItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        addToCart,
        cartItems,
        addCartItemAmount,
        subtractCartItemAmount,
        calcCartTotal,
        calcTotalItemAmount,
        removeCartItem,
        clearCart,
        showModal,
        setShowModal,
        grandTotal,
        setGrandTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => React.useContext(AppContext);
