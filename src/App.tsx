import { Routes, Route, Navigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from './hooks/Contexts/AuthContext'
import {Layout} from './components/Layout/Layout.tsx'
import {Blog} from './components/body/pages/Blog.tsx'
import {Admin} from './components/body/pages/Admin.tsx'
import {Login} from './components/body/pages/Login.tsx'
import {Slug} from './components/body/pages/Slug.tsx'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuth } = useContext(AuthContext);
    if (!isAuth) return <Navigate to="/login" replace />;
    return <>{children}</>;
}

function App() {
  return (
    <section data-theme="light">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:slug" element={<Slug />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
