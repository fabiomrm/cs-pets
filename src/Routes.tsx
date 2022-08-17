import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import { List } from './pages/List'

import { Register } from './pages/Register'


export function Router() {
  return (
    <Routes>

      <Route path="/" element={<Register />} />
      <Route path="/list" element={
        <PrivateRoute>
          <List />
        </PrivateRoute>
      } />
    </Routes >
  )
}