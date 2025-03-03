import { getAxiosInstace } from "../../utils/axiosInstance";
import { INITIAL_STATE, IProduct, ProductActionContext, ProductStateContext } from "./context";
import { ProductReducer } from "./reducer";
import { useContext, useReducer } from "react";
import { getProductsError, getProductsPending, getProductsSuccess, getProductError, getProductPending, getProductSuccess, createProductPending, createProductError, updateProductSuccess, createProductSuccess, updateProductPending, updateProductError, deleteProductPending, deleteProductSuccess, deleteProductError} from "./actions";
import axios from "axios";

 export const ProductProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);
    const instance = getAxiosInstace();

    const getProducts = async() => {
        dispatch(getProductsPending());
        const endpoint =    `https://fakestoreapi.com/products`;
        await axios(endpoint)
        .then((response) => {
            dispatch(getProductsSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(getProductsError());
        });
    };

    const getProduct = async(id: string) => {
        dispatch(getProductPending());
        const endpoint = `/products/${id}`;
        await instance.get(endpoint)
        .then((response) => {
            dispatch(getProductSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(getProductError());
        });
    }       

    const createProduct = async(product: IProduct) => {
        dispatch(createProductPending());
        const endpoint = `/products`;
        await instance.post(endpoint, product)
        .then((response) => {
            dispatch(createProductSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(createProductError());
        });
    }

    const updateProduct = async( product: IProduct) => {
        dispatch(updateProductPending());
        const endpoint = `/products/${product.id}`;
        await instance.put(endpoint, product)
        .then((response) => {
            dispatch(updateProductSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(updateProductError());
        });
    }

    const deleteProduct = async(id: string) => {
        dispatch(deleteProductPending());
        const endpoint = `https://fakestoreapi.com/products/${id}`;
        await instance.delete(endpoint)
        .then((response) => {   
            dispatch(deleteProductSuccess(response.data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(deleteProductError());
        });
    }

    return(
        <ProductStateContext.Provider value={state}>
            <ProductActionContext.Provider value={{getProducts, getProduct, createProduct, updateProduct, deleteProduct}}>
                {children}
            </ProductActionContext.Provider>
        </ProductStateContext.Provider>
    )
   
};

export const useProductState = () => {
    const context = useContext(ProductStateContext);
    if (!context) {
        throw new Error('useProductState must be used within a ProductProvider');
    }
    return context;
}

export const useProductActions = () => {
    const context = useContext(ProductActionContext);
    if (!context) {
        throw new Error('useProductActions must be used within a ProductProvider');
    }    return context;
}

