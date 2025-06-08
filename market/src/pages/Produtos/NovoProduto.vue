<template>
  <v-container>
    <h1 class="mb-2">Novo Produto</h1>
    <p class="text-subtitle-1 mb-4">Preencha as informações abaixo para cadastrar um novo produto:</p>

    <v-form @submit.prevent="cadastrarProduto" ref="formRef">
      <v-text-field
        label="Nome do Produto"
        v-model="produto.name"
        required
        variant="outlined"
      ></v-text-field>

      <v-text-field
        label="Descrição"
        v-model="produto.description"
        required
        variant="outlined"
      ></v-text-field>

      <v-text-field
        label="Preço"
        v-model="produto.price"
        type="number"
        required
        variant="outlined"
      ></v-text-field>

      <v-text-field
        label="Estoque"
        v-model="produto.stock"
        type="number"
        required
        variant="outlined"
      ></v-text-field>

      <v-btn type="submit" color="primary" class="mt-4">Cadastrar</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from '@/plugins/axios'; // Ajuste o caminho se precisar
import { useRouter } from 'vue-router';
import type { IProduto } from './IProduto';
import { createProduct } from '@/services/ProductServices';


const produto = ref<IProduto>({
  name: '',
  description: '',
  price: 0,
  stock: 0
});

const formRef = ref();
const router = useRouter();

const cadastrarProduto = async () => {
  try {
    // Você pode adicionar validações antes de enviar
    console.log('Enviando produto:', produto.value);

    const response = await createProduct(produto.value);
    if(response.data.success){
    router.push('/dashboard/produtos'); 
    }
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    alert('Erro ao cadastrar produto. Tente novamente.');
  }
};
</script>