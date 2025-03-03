import { handleActions } from "redux-actions";
import { INITIAL_STATE, IProductStateContext } from "./context";
import { ProductActionEnums } from "./actions";

export const ProductReducer = handleActions<IProductStateContext, IProductStateContext>({
    [ProductActionEnums.getProductsPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.getProductsSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.getProductsError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.getProductPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.getProductSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.getProductError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.createProductPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.createProductSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.createProductError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.updateProductPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.updateProductSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.updateProductError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.deleteProductPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.deleteProductSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [ProductActionEnums.deleteProductError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
}, INITIAL_STATE );
