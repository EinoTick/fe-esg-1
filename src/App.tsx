import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import PageHeader from "./layouts/PageHeader.tsx";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navbar />
          <HomePage />
      </>
  )
}

export default App
