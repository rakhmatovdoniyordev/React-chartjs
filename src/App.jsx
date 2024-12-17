import { Toaster } from 'react-hot-toast'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Router from './router/Router'

function App() {
  return (
    <>
      <Router/>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}

export default App
