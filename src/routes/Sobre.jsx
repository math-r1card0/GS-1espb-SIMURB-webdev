import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

const Sobre = () => {
  const [activeTab, setActiveTab] = useState('missao')

  const tabs = [
    { id: 'missao', label: 'Missão', icon: '🎯' },
    { id: 'visao', label: 'Visão', icon: '👁️' },
    { id: 'valores', label: 'Valores', icon: '💎' },
    { id: 'equipe', label: 'Equipe', icon: '👥' }
  ]

  const tabContent = {
    missao: {
      title: 'Nossa Missão',
      content: 'Desenvolver soluções tecnológicas inovadoras que transformem cidades em ambientes mais inteligentes, sustentáveis e eficientes, melhorando a qualidade de vida dos cidadãos através do monitoramento urbano avançado.'
    },
    visao: {
      title: 'Nossa Visão',
      content: 'Ser a plataforma líder mundial em monitoramento urbano inteligente, conectando cidades e comunidades através de tecnologia de ponta para criar um futuro urbano mais promissor e sustentável.'
    },
    valores: {
      title: 'Nossos Valores',
      content: 'Inovação, Sustentabilidade, Transparência, Eficiência e Colaboração. Acreditamos que a tecnologia deve servir à humanidade e ao meio ambiente de forma ética e responsável.'
    },
    equipe: {
      title: 'Nossa Equipe',
      content: 'Somos uma equipe multidisciplinar de estudantes da FIAP, apaixonados por tecnologia e comprometidos com o desenvolvimento de soluções que fazem a diferença no mundo real.'
    }
  }

  const stats = [
    { number: '50+', label: 'Cidades Monitoradas', icon: '🏙️' },
    { number: '1M+', label: 'Dados Processados', icon: '📊' },
    { number: '24/7', label: 'Monitoramento', icon: '⏰' },
    { number: '99.9%', label: 'Uptime', icon: '🚀' }
  ]

  const teamMembers = [
    {
      name: 'Matheus Ricardo',
      role: 'Desenvolvedor Frontend',
      image: '/public/blueSuit.jpg',
      bio: 'Especialista em React e UX/UI Design'
    },
    {
      name: 'Marcos Azuma',
      role: 'Desenvolvedor Backend',
      image: '/public/mAzumaPhoto.jpeg',
      bio: 'Expert em arquitetura de sistemas e APIs'
    },
    {
      name: 'Filip Arnhold Outa',
      role: 'Data Scientist',
      image: '/public/filipPhoto.jpeg',
      bio: 'Análise de dados e Machine Learning'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Sobre - SIMURB</title>
        <meta name="description" content="Conheça a história, missão e equipe por trás do SIMURB - Sistema Inteligente de Monitoramento Urbano." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Sobre o SIMURB
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Transformando cidades através da tecnologia inteligente e sustentável
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Tabs Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'border-b-2 border-primary-600 text-primary-600 bg-primary-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {tabContent[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conheça Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estudantes apaixonados por tecnologia e inovação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600">
              Como o SIMURB nasceu e evoluiu
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: '2024', title: 'Ideação', description: 'Identificação da necessidade de monitoramento urbano inteligente' },
              { year: '2024', title: 'Desenvolvimento', description: 'Criação do MVP e primeiros testes de conceito' },
              { year: '2025', title: 'Lançamento', description: 'Apresentação da solução completa para o mercado' }
            ].map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-primary-600 font-bold mr-4">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
