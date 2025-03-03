import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AdminLayout from "./layouts/admin";
import ClientLayout from "./layouts/client";
import EmptyLayout from "./layouts/empty";
import Login from "./pages/login";
import withAuth from "./hoc/withAuth";
import ProductsPage from "./pages/products";

// Wrap components with authentication
const ProtectedHome = withAuth(Home, { allowedRoles: ['admin'] });
const ProtectedAbout = withAuth(About, { allowedRoles: ['client'] });

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
        <Route index element={<ProtectedHome />} />
        <Route path="home" element={< ProtectedHome/>} />
        <Route path="products" element={<ProductsPage/>}/>
      </Route>

      {/* Protected Client Routes */}
      <Route path="/client" element={<ProtectedClientLayout />}>
        <Route index element={<ProtectedAbout />} />
        <Route path="about" element={<ProtectedAbout />} />
      </Route>
    </Routes>
  );
};

export default App;

