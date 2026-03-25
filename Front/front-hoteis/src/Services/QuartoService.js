import api from './api';

export const listarQuartos = async () => {
    const response = await api.get("/api/Quarto");
    return response.data;
}