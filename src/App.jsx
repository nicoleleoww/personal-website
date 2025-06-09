import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experiences from './pages/Experiences'

function App() {
  return (
    <>
      <Navbar />
			<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Experiences" element={<Experiences />} />
			</Routes>
    </>
  )
}

export default App
