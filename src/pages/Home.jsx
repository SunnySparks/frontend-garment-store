import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
        <h1 className='text-4xl font-bold text-blue-600 mb-4'>
            Tienda de ropa de Lubia
        </h1>
        <p className='text-lg text-gray-700 mb-8'>
            Administra tus clientes
        </p>
        <Link to='/clients' className='px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition'>
            Gestionar clientes
        </Link>
    </div>
  )
}

export default Home