import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
			<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Experiences" element={<Experiences />} />
					<Route path="/Projects" element={<Projects />} />
			</Routes>
    </>
  )
}

export default App
