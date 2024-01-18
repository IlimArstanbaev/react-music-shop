import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { ACTION_PRODUCTS, API_PRODUCTS } from "../helpers/const";

const productContext = createContext();

export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  product: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_PRODUCTS.GET_PRODUCTS:
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      let res = await axios(API_PRODUCTS);
      dispatch({
        type: ACTION_PRODUCTS.GET_PRODUCTS,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(newProduct) {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (error) {
      console.log(error);
    }
  }
  const values = { createProduct, getProducts, products: state.products };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
