import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import MyProfile from './pages/MyProfile';
import JobsListing from './pages/JobsListing';
import NewJob from './pages/NewJob';
import Mentors from './pages/Mentors';
import MentorProfile from './pages/MentorProfile';
import Mentees from './pages/Mentees';
import EditJob from './pages/EditJob';
import Settings from './pages/Settings';
import NewAdmin from './pages/NewAdmin';
import Admins from './pages/Admins';
import Payments from './pages/Payments';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/jobs-listing/*" element={<JobsListing />} />
        <Route path="/jobs-listing/new-job" element={<NewJob />} />
        <Route path="/jobs-listing/:jobId" element={<EditJob />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/new-admin" element={<NewAdmin />} />
        <Route path="/mentors/*" element={<Mentors />} />
        <Route path="/mentors/:mentorId" element={<MentorProfile />} />
        <Route path="/mentees" element={<Mentees />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
