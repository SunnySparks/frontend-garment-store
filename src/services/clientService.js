import axios from "axios";

const API_URL = "https://backend-garment-store-bice.vercel.app/clients";

export const getClients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createClient = async (clientData) => {
  try {
    const response = await axios.post(API_URL, clientData);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al crear el cliente: ", error);
    throw error;
  }
};

export const getClientById = async (id, clientData) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al obtener el cliente: ", error);
    throw error;
  }
};

export const updateClient = (id, clientData) => {
  try {
    const response = axios.put(`${API_URL}/${id}`, clientData);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al actualizar el cliente: ", error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al eliminar el cliente: ", error);
    throw error;
  }
};
