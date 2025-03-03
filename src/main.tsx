import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import  {ProductProvider} from './providers/productProvider';
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
