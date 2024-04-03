import React from 'react';
import "./app.scss";
import About from './pages/About';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from './context/AuthContext';
import { Dashboard, Home, Login, Register } from "./pages";
import Settings from './pages/Settings';
import AttendanceRecords from './pages/AttendanceRecords';
import Form from './pages/Form';
import All from './pages/All';
import LeaveApplication from './pages/LeaveApplication';
import Introduction from './pages/Introduction';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page31 from './pages/Page31';
import Profile from './pages/Profile';
import Show from './pages/Show';
import Multi from './pages/Multipage/Multi';
import CRUD from './pages/CRUD';
import Payment from './pages/Multipage/Payment';
import NotFound from './pages/NotFound'; 

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Router>
          <AuthProvider>
            <Routes>
              <Route 
                path="/dashboard"
                element={
                  <ProtectedRoute> 
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
              <Route 
                path="/settings"
                element={
                  <ProtectedRoute> 
                    <Settings />
                  </ProtectedRoute>
                } />

              <Route 
                path="/profile"
                element={
                  <ProtectedRoute> 
                    <Profile />
                  </ProtectedRoute>
                } />
              
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/intro" exact element={<Introduction />} />
              <Route path="/contacts" exact element={<Contacts />} />
              <Route path="/products" exact element={<Products/>} />
              <Route path="/sidebar" exact element={<Sidebar/>} />
              <Route path="/show" exact element={<Show/>} />
              <Route path="/footer" exact element={<Footer/>} />
              <Route path="/page2" exact element={<Page2/>} />
              <Route path="/page3" exact element={<Page3/>} />
              <Route path="/page4" exact element={<Page4/>} />
              <Route path="/page5" exact element={<Page5/>} />
              <Route path="/page6" exact element={<Page6/>} />
              <Route path="/page7" exact element={<Page7/>} />
              <Route path="/page31" exact element={<Page31/>} />
              <Route path="/form" element={<Form />} />
              <Route path="/enrol" element={<Multi />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/all" element={<ProtectedRoute><All /></ProtectedRoute>} />
              <Route path="/form" element={<ProtectedRoute><Form /></ProtectedRoute>} />
              <Route path="/attendance" element={<ProtectedRoute><AttendanceRecords /></ProtectedRoute>} />
              <Route path="/leave" element={<ProtectedRoute><LeaveApplication /></ProtectedRoute>} />
              
              {/* Catch-all route for 404 errors */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
