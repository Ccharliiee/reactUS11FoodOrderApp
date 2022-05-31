import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const addItem2CartHandler = (item) => {};
  const removeItem2CartHandler = (id) => {};
  const CartContextData = {
    items: [],
    totalAmount: 0,
    addItem: addItem2CartHandler,
    removeItem: removeItem2CartHandler,
  };
  return (
    <CartContext.Provider value={CartContextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
