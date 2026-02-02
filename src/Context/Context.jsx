import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const buyProducts = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 🔥 CONTADOR AUTOMÁTICO
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        buyProducts,
        cartCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
