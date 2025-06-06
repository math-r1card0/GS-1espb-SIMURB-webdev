import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Helmet>
        <title>Página não encontrada - SIMURB</title>
        <meta name="description" content="A página que você está procurando não foi encontrada." />
      </Helmet>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="btn-primary inline-block"
            >
              Voltar ao Início
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Ou navegue para:</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link to="/sobre" className="text-primary-600 hover:text-primary-700 underline">
                  Sobre
                </Link>
                <Link to="/solucao" className="text-primary-600 hover:text-primary-700 underline">
                  Solução
                </Link>
                <Link to="/login" className="text-primary-600 hover:text-primary-700 underline">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
