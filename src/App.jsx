import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import SignUpPage from './pages/signup'
import Login from './pages/login'
import Header from './components/header'
import AdminPage from './pages/adminpage'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Header /> */}
        {/* The Routes component must wrap ALL Route components */}
        <Routes>
          {/* Optional: Add a redirect so localhost:3000/ goes to home automatically */}
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin/*" element={<AdminPage />} />

          {/* Catch-all route for 404s (optional) */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App