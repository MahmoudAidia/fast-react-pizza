import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediteranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItem(state, action) {
      // payload = new item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        // Here I have to options to delete the item
        // (1) To copy the logic from deleteItem reducer
        // state.cart = state.cart.filter(
        //   (item) => item.pizzaId !== action.payload,
        // );

        // (2) To use this feature from Redux to access a reducer
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

/* 
  Having these selector functions here can have performance issues.
  There is actually another library called reselect which may be usefull.
*/
function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
}

function getTotalCartPrice(state) {
  return state.cart.cart.reduce((price, item) => {
    return price + item.totalPrice;
  }, 0);
}

function getCartItems(state) {
  return state.cart.cart;
}

function getUser(state) {
  return state.user.username;
}

const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export {
  getTotalCartQuantity,
  getTotalCartPrice,
  getCartItems,
  getUser,
  getCurrentQuantityById,
};
export default cartSlice.reducer;
