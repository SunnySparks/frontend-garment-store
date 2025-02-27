import axios from "axios";

const API_URL = axios.create({
  baseURL: "https://backend-garment-store-nine.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getClients = async () => {
  try {
    const response = await API_URL.get("/api/clients");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createClient = async (clientData) => {
  try {
    const response = await API_URL.post("/api/clients", clientData);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al crear el cliente: ", error);
    throw error;
  }
};

export const getClientById = async (id, clientData) => {
  try {
    const response = await API_URL.get(`${"/api/clients"}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al obtener el cliente: ", error);
    throw error;
  }
};

export const updateClient = (id, clientData) => {
  try {
    const response = API_URL.put(`${"/api/clients"}/${id}`, clientData);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al actualizar el cliente: ", error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await API_URL.delete(`${"/api/clients"}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al eliminar el cliente: ", error);
    throw error;
  }
};
