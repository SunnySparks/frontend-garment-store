import React, { useEffect, useState } from 'react'
import ClientForm from '../components/ClientForm'
import ClientList from '../components/ClientList'
import {createClient, deleteClient, getClients} from '../services/clientService'

const ClientCRUD = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async() => {
          try {
            const data = await getClients();
            setClients(data);
          } catch (error) {
            console.error("Error al cargar los clientes", error);
          }
        };
        fetchClients();
      }, []);

      const addClient = async(client) => {
        try {
          const newClient = await createClient(client);
          setClients([...clients, newClient]);
        } catch (error) {
          console.error("Error al agregar cliente", error);
        }
      }

    const handleDeleteClient = async(id) => {
        try {
          await deleteClient(id);
          setClients(clients.filter(client => client._id!==id));
        } catch (error) {
          console.error("Error al eliminar cliente", error);
        }
      }

  return (
    <div className='p-4'>
        <h1 className='text-2xl font-bold text-blue-500 mb-4'>Gestión de clientes</h1>
        <ClientForm onSubmit={addClient} />
        <ClientList clients={clients} onDelete={handleDeleteClient} />
    </div>
  )
}

export default ClientCRUD