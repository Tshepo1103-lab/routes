import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AdminLayout from "./layouts/admin";
import ClientLayout from "./layouts/client";
import EmptyLayout from "./layouts/empty";
import Login from "./pages/login";
import withAuth from "./hoc/withAuth";
import ProductsPage from "./pages/products";

// Create protected layouts
const ProtectedAdminLayout = withAuth(AdminLayout, { allowedRoles: ['admin'] });
const ProtectedClientLayout = withAuth(ClientLayout, { allowedRoles: ['client'] });

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<EmptyLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Protected Admin Routes */}
      <Route path="/admin" element={<ProtectedAdminLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<ProductsPage />}/>
      </Route>

      {/* Protected Client Routes */}
      <Route path="/client" element={<ProtectedClientLayout />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;

