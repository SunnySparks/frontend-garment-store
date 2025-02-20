import axios from "axios";

const API_URL = axios.create({
  baseURL: "https://backend-garment-store-nine.vercel.app/api/clients",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClients = async () => {
  try {
    const response = await axios.get("/api/clients", { withCredentials: true });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createClient = async (clientData) => {
  try {
    const response = await axios.post("/api/clients", clientData, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al crear el cliente: ", error);
    throw error;
  }
};

export const getClientById = async (id, clientData) => {
  try {
    const response = await axios.get(`${"/api/clients"}/${id}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al obtener el cliente: ", error);
    throw error;
  }
};

export const updateClient = (id, clientData) => {
  try {
    const response = axios.put(`${"/api/clients"}/${id}`, clientData, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al actualizar el cliente: ", error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`${"/api/clients"}/${id}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Hubo un error al eliminar el cliente: ", error);
    throw error;
  }
};
