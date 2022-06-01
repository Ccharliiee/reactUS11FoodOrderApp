import CartContext from "./CartContext";
import { useReducer } from "react";

const CartInitData = {
  items: [],
  totalAmount: 0,
};

const cartDataReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const NewItems = state.items.concat(action.item);
    const NewtotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: NewItems,
      totalAmount: NewtotalAmount,
    };
  }
  return CartInitData;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartDataReducer,
    CartInitData
  );
  const addItem2CartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItem2CartHandler = (id) => {};
  const CartContextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
