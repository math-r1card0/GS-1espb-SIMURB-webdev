import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Layout Components
import Nav from './components/Nav'
import Footer from './components/Footer'

// Route Components
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Solucao from './routes/Solucao'
import Login from './routes/Login'
import Cadastrar from './routes/Cadastrar'
import Error from './routes/Error'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>SIMURB - Sistema Inteligente de Monitoramento Urbano</title>
        <meta name="description" content="SIMURB é uma solução inovadora para monitoramento inteligente de cidades" />
        <meta property="og:title" content="SIMURB" />
        <meta property="og:description" content="Sistema Inteligente de Monitoramento Urbano" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Nav />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
