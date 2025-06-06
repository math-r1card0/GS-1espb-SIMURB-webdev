import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// - Filip Arnhold Outa — RM: 559294
// - Marcos Eduardo Hideyoshi Azuma — RM: 559883
// - Matheus Ricardo Parreira da Silva — RM: 560099

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const slides = [
    {
      id: "monitoring",
      title: "Monitoramento Inteligente",
      description: "Tecnologia avançada para cidades mais seguras e eficientes",
      image: "/experience-1400w.png",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: "realtime",
      title: "Dados em Tempo Real",
      description: "Análise instantânea para tomada de decisões rápidas",
      image: "/data-1400w.png",
      color: "from-green-600 to-blue-600"
    },
    {
      id: "growth",
      title: "Crescimento Sustentável",
      description: "Soluções que promovem o desenvolvimento urbano responsável",
      image: "/growth-800w.png",
      color: "from-purple-600 to-pink-600"
    }
  ]
  const features = [
    {
      id: "monitoring",
      icon: "🏙️",
      title: "Monitoramento Urbano",
      description: "Análise completa do ambiente urbano com sensores IoT distribuídos pela cidade"
    },
    {
      id: "analytics",
      icon: "📊",
      title: "Analytics Avançado",
      description: "Dashboards intuitivos com visualização de dados em tempo real"
    },
    {
      id: "alerts",
      icon: "🚨",
      title: "Alertas Inteligentes",
      description: "Sistema de notificações automáticas para situações que requerem atenção"
    },
    {
      id: "sustainability",
      icon: "🌱",
      title: "Sustentabilidade",
      description: "Ferramentas para monitorar e melhorar a pegada ambiental da cidade"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SIMURB - Sistema Inteligente de Monitoramento Urbano</title>
        <meta name="description" content="Transforme sua cidade com tecnologia inteligente. SIMURB oferece soluções avançadas para monitoramento urbano em tempo real." />
      </Helmet>

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">        <div className="absolute inset-0">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                slides.indexOf(slide) === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-80`}></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className={`relative z-10 flex items-center justify-center h-full text-white text-center px-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animation-delay-200 animate-slide-up">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animation-delay-400 animate-slide-up">
              <Link
                to="/solucao"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Conheça Nossa Solução
              </Link>
              <Link
                to="/sobre"
                className="btn-secondary text-lg px-8 py-4 inline-block bg-white/20 text-white border-2 border-white hover:bg-white hover:text-gray-900"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-20"
          aria-label="Slide anterior"
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-20"
          aria-label="Próximo slide"
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((slide, slideIndex) => (
            <button
              key={`indicator-${slide.id}`}
              onClick={() => setCurrentSlide(slideIndex)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                slideIndex === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o SIMURB?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma oferece soluções completas para o monitoramento e gestão inteligente de cidades
            </p>
          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, featureIndex) => (
              <div
                key={feature.id}
                className="card text-center hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${featureIndex * 200}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua cidade?
          </h2>
          <p className="text-xl mb-8">
            Junte-se às cidades que já estão usando o SIMURB para criar ambientes urbanos mais inteligentes e sustentáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cadastrar"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Comece Agora
            </Link>
            <Link
              to="/login"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Fazer Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
