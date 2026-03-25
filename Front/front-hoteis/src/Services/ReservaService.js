import api from './api';

export const listaReservas = async () => {
    const response = await api.get("/Reserva");
    return response.data;
}