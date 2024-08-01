import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
