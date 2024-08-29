import axios from 'axios';

const API_URL = 'http://localhost:5000/api/plants';

// Função para obter todas as plantas
export const fetchPlants = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar plantas:', error);
        throw error;
    }
};

// Função para adicionar uma nova planta
export const addPlant = async (plant) => {
    try {
        const response = await axios.post(API_URL, plant);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar planta:', error);
        throw error;
    }
};

// Função para atualizar uma planta
export const updatePlant = async (id, plant) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, plant);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar planta:', error);
        throw error;
    }
};

// Função para deletar uma planta
export const deletePlant = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Erro ao deletar planta:', error);
        throw error;
    }
};
