import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Deplacement from './pages/Deplacement'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Vente from './pages/Vente'
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/deplacement" element={<Deplacement />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/vente" element={<Vente />} />
			</Routes>
			<Footer/>
		</Router>
	)
}

export default App
