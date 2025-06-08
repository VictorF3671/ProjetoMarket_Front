import axios from '@/plugins/axios'; 

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export const getAllProducts = async () => {
  const response = await axios.get('/Products');
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await axios.get(`/produtos/${id}`);
  return response.data;
};

export const createProduct = async (product: Product) => {
  const response = await axios.post('/Products', product);
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