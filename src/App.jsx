import { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
// import DashboardLayout from './components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
