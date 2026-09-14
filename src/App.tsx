import { Routes, Route, Navigate } from 'react-router'
import {Layout} from './components/Layout/Layout.tsx'
import {Blog} from './components/body/pages/Blog.tsx'
import {Admin} from './components/body/pages/Admin.tsx'
import {Login} from './components/body/pages/Login.tsx'
import {Slug} from './components/body/pages/Slug.tsx'

function App() {

  return (
    <section data-theme="light">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:slug" element={<Slug />} />
      </Route>
    </Routes>
    </section>
  )
}

export default App
