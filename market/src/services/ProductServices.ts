import axios from '@/plugins/axios'; 

export interface Product {
  id?: number;
  nome: string;
  descricao: string;
  preco: number;
}

export const getAllProducts = async () => {
  const response = await axios.get('/produtos');
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await axios.get(`/produtos/${id}`);
  return response.data;
};

export const createProduct = async (product: Product) => {
  const response = await axios.post('/produtos', product);
  return response.data;
};

export const updateProduct = async (id: number, product: Product) => {
  const response = await axios.put(`/produtos/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete(`/produtos/${id}`);
  return response.data;
};