import { Routes } from 'react-router'
import NavBar from './components/Header/NavBar.tsx'
import Home from './pages/Home.tsx'
import Blog from './pages/Blog.tsx'
import Admin from './pages/Admin.tsx'
import Login from './pages/Login.tsx'
import Slug from './pages/Slug.tsx'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:slug" element={<Slug />} />
      </Routes>
    </>
  )
}

export default App
