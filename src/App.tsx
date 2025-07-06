import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import AdminDashboard from './pages/Admin/AdminDashboard';

// Auth0 configuration
const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'dev-your-domain.us.auth0.com';
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-client-id';

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: `https://${domain}/api/v2/`,
        scope: 'openid profile email'
      }}
    >
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotel/:slug" element={<HotelDetail />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;