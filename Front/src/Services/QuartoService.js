import api from './api';

export const listarQuartos = async () => {
    const response = await api.get("/api/Quarto");
    return response.data;
};

export const cadastraQuarto = async (dados) => {
    const response = await api.post('http://localhost:5201/api/Quarto', dados);
    return response.data;
};

export const atualizarQuarto = async (id, dados) => {
    const response = await api.put(`/api/Quarto/${id}`, dados)
    return response.data;
};

export const deletarQuarto = async (id) => {
    const response = await api.delete(`/api/Quarto/${id}`);
    return response.data;
};
