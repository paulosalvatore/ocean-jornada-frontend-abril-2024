import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ReadAll from './pages/ReadAll/ReadAll'
import Create from './pages/Create/Create'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ReadAll />
  },
  {
    path: '/criar',
    element: <Create />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
