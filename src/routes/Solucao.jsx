import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

const Solucao = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [selectedDemo, setSelectedDemo] = useState(null)

  const features = [
    {
      title: 'Monitoramento em Tempo Real',
      description: 'Sistema de sensores IoT distribuídos pela cidade coletando dados 24/7',
      icon: '📡',
      details: [
        'Sensores de qualidade do ar',
        'Monitoramento de tráfego',
        'Níveis de ruído urbano',
        'Temperatura e umidade'
      ],
      image: '/data-1400w.png'
    },
    {
      title: 'Analytics Avançado',
      description: 'Processamento inteligente de dados com IA para insights acionáveis',
      icon: '🧠',
      details: [
        'Machine Learning para previsões',
        'Dashboards interativos',
        'Relatórios automatizados',
        'Alertas personalizados'
      ],
      image: '/experience-1400w.png'
    },
    {
      title: 'Gestão Inteligente',
      description: 'Ferramentas para tomada de decisão baseada em dados',
      icon: '⚡',
      details: [
        'Otimização de recursos',
        'Planejamento urbano',
        'Gestão de emergências',
        'Eficiência energética'
      ],
      image: '/growth-800w.png'
    }
  ]

  const solutions = [
    {
      category: 'Mobilidade',
      title: 'Gestão de Tráfego Inteligente',
      description: 'Otimização do fluxo de veículos com base em dados em tempo real',
      benefits: ['Redução de congestionamentos', 'Menor tempo de deslocamento', 'Redução de emissões'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Meio Ambiente',
      title: 'Monitoramento Ambiental',
      description: 'Acompanhamento da qualidade do ar, água e níveis de poluição',
      benefits: ['Ar mais limpo', 'Alertas de poluição', 'Políticas ambientais baseadas em dados'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Segurança',
      title: 'Sistema de Segurança Urbana',
      description: 'Monitoramento integrado para prevenção e resposta a incidentes',
      benefits: ['Resposta rápida a emergências', 'Prevenção de crimes', 'Maior sensação de segurança'],
      color: 'from-red-500 to-pink-500'
    },
    {
      category: 'Energia',
      title: 'Eficiência Energética',
      description: 'Otimização do consumo energético da infraestrutura urbana',
      benefits: ['Redução de custos', 'Sustentabilidade', 'Grid inteligente'],
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const demos = [
    { id: 1, title: 'Dashboard Principal', type: 'video', url: '/togethr-template.mp4' },
    { id: 2, title: 'Analytics em Tempo Real', type: 'image', url: '/data-1400w.png' },
    { id: 3, title: 'Sistema de Alertas', type: 'image', url: '/experience-1400w.png' }
  ]

  const openModal = (demo) => {
    setSelectedDemo(demo)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedDemo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Nossa Solução - SIMURB</title>
        <meta name="description" content="Descubra como o SIMURB revoluciona o monitoramento urbano com tecnologia de ponta e soluções inteligentes." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Nossa Solução
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-200">
              Tecnologia avançada para transformar cidades em ambientes mais inteligentes e sustentáveis
            </p>
            <button
              onClick={() => openModal(demos[0])}
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center space-x-2"
            >
              <span>Ver Demo</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recursos Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as funcionalidades que fazem do SIMURB a solução ideal para sua cidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-primary-50 border-2 border-primary-200 shadow-lg'
                      : 'bg-white border-2 border-gray-200 hover:border-primary-200'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      {activeFeature === index && (
                        <ul className="space-y-2 animate-slide-up">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="rounded-xl shadow-2xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções por Categoria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplicações práticas do SIMURB em diferentes áreas da gestão urbana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="card hover:transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                      {solution.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Benefícios:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showModal && selectedDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold">{selectedDemo.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {selectedDemo.type === 'video' ? (
                <video
                  controls
                  className="w-full h-auto rounded-lg"
                  src={selectedDemo.url}
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              ) : (
                <img
                  src={selectedDemo.url}
                  alt={selectedDemo.title}
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Solucao
