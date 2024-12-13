import React from 'react'

const ClientList = ({clients, onDelete}) => {
  return (
    <div>
        <h2 className='text-xl font-bold mb-4'>Clientes</h2>
        <ul>
            {clients.map(client => (
                <li key={client._id} className='mb-2'>
                    <span>{client.name} - {client.garmentType}</span>
                    <button onClick={() => onDelete(client._id)} className='text-red-500 px-2 py-1 rounded hover:text-red-700'>Borrar</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ClientList