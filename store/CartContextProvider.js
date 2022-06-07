import CartContext from "./CartContext";
import { useReducer } from "react";

const CartInitData = {
  items: [],
  totalPrice: 0,
};

const cartDataReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedtotalPrice =
      state.totalPrice + action.item.amount * action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingIteminCart = state.items[existingItemIndex];
    let updatedItems;
    if (existingIteminCart) {
      const updatedItem = {
        ...existingIteminCart,
        amount: existingIteminCart.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: updatedtotalPrice,
    };
  }
  if (action.type === "RM_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingIteminCart = state.items[existingItemIndex];
    const updatedtotalPrice = state.totalPrice - existingIteminCart.price;
    let updatedItems;
    if (existingIteminCart.amount > 1) {
      const updatedItem = {
        ...existingIteminCart,
        amount: existingIteminCart.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    return {
      items: updatedItems,
      totalPrice: updatedtotalPrice,
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
  const removeItem2CartHandler = (id) => {
    dispatchCartAction({ type: "RM_ITEM", id: id });
  };
  const CartContextData = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
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
