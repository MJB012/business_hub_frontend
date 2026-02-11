import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Login from './pages/login/Login'
import SignUp from './pages/sign-up/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import Layout from './components/layout/Layout';
import Category from './pages/category/Category'
import SupplierManagement from './pages/supplier/Supplier'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Public routes (no sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        
        {/* Protected routes (WITH sidebar via Layout) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Category />} />
            {/* Add more protected routes here */}
          <Route path="suppliers" element={<SupplierManagement />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)