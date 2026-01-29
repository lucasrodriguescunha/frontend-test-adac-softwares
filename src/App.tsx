import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

// Pages (podem ser componentes simples por enquanto)
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import { Hero } from './components/sections/Hero/Hero';

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
