import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ReadAll from './pages/ReadAll/ReadAll'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ReadAll />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
