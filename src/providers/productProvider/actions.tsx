import { createAction } from "redux-actions";
import { IProduct, IProductStateContext } from "./context";

// Enum defining the type of actions that can be dispatched
export enum ProductActionEnums {
  // Each operation (get/create/update/delete) has three states:
  // PENDING: Action started
  // SUCCESS: Action completed successfully
  // ERROR: Action failed
  getProductsPending = "GET_PRODUCTS_PENDING",
  getProductsSuccess = "GET_PRODUCTS_SUCCESS",
  getProductsError = "GET_PRODUCTS_ERROR",

  getProductPending = "GET_PRODUCT_PENDING",
  getProductSuccess = "GET_PRODUCT_SUCCESS",
  getProductError = "GET_PRODUCT_ERROR",

  createProductPending = "CREATE_PRODUCT_PENDING",
  createProductSuccess = "CREATE_PRODUCT_SUCCESS",
  createProductError = "CREATE_PRODUCT_ERROR",

  updateProductPending = "UPDATE_PRODUCT_PENDING",
  updateProductSuccess = "UPDATE_PRODUCT_SUCCESS",
  updateProductError = "UPDATE_PRODUCT_ERROR",

  deleteProductPending = "DELETE_PRODUCT_PENDING",
  deleteProductSuccess = "DELETE_PRODUCT_SUCCESS",
  deleteProductError = "DELETE_PRODUCT_ERROR",
}

// createAction<PayloadType>(actionType, payloadCreator)
// - PayloadType: The type of data the action will contain
// - actionType: The string identifier for this action
// - payloadCreator: Function that returns the action payload

// Get All Products Actions
export const getProductsPending = createAction<IProductStateContext>(
  ProductActionEnums.getProductsPending,
  // Returns state object indicating loading started
  () => ({ isPending: true, isSuccess: false, isError: false })
);

// Example of createAction with multiple generic types:
// createAction<ReturnType, PayloadType>
export const getProductsSuccess = createAction<
  IProductStateContext, // What the payload creator returns
  IProduct[]           // Type of argument passed to payload creator
>(
  ProductActionEnums.getProductsSuccess,
  // Receives products array and returns state with products
  (products: IProduct[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    products, // Include fetched products in state
  })
);

export const getProductsError = createAction<IProductStateContext>(
  ProductActionEnums.getProductsError,
  // Returns state object indicating error occurred
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Single Product Actions
// Similar pattern: each action updates the state to reflect the operation status
export const getProductPending = createAction<IProductStateContext>(
  ProductActionEnums.getProductPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getProductSuccess = createAction<IProductStateContext, IProduct>(
  ProductActionEnums.getProductSuccess,
  (product: IProduct) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    product,
  })
);

export const getProductError = createAction<IProductStateContext>(
  ProductActionEnums.getProductError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createProductPending = createAction<IProductStateContext>(
  ProductActionEnums.createProductPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createProductSuccess = createAction<
  IProductStateContext,
  IProduct
>(ProductActionEnums.createProductSuccess, (product: IProduct) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  product,
}));

export const createProductError = createAction<IProductStateContext>(
  ProductActionEnums.createProductError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateProductPending = createAction<IProductStateContext>(
  ProductActionEnums.updateProductPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateProductSuccess = createAction<
  IProductStateContext,
  IProduct
>(ProductActionEnums.updateProductSuccess, (product: IProduct) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  product,
}));

export const updateProductError = createAction<IProductStateContext>(
  ProductActionEnums.updateProductError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteProductPending = createAction<IProductStateContext>(
  ProductActionEnums.deleteProductPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteProductSuccess = createAction<
  IProductStateContext,
  IProduct
>(ProductActionEnums.deleteProductSuccess, (product: IProduct) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  product,
}));

export const deleteProductError = createAction<IProductStateContext>(
  ProductActionEnums.deleteProductError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
