<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="space-between"
      class="pa-4"
      style="gap: 16px;" 
    >
      <div>
        <h1>Lista de Produtos</h1>
        <p class="text-subtitle-1">Lista de todos seus produtos cadastrados</p>
      </div>

      <div class="d-flex align-center" style="gap: 12px;">
        <v-text-field
          v-model="search"
          label="Buscar"
          prepend-inner-icon="mdi-magnify"
          dense
          hide-details
          variant="outlined"
          width="200px"
        ></v-text-field>

        <v-btn color="primary" @click="goToNovoProduto" height="40" style="height: 50px;">
          Novo Produto
        </v-btn>
      </div>
    </v-row>

    
    <v-data-table
      :headers="headers"
      :items="produtos"
      :search="search"
      class="mt-4"
      color="primary"
    ></v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { IProduto } from './IProduto.ts';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { getAllProducts } from '@/services/ProductServices';

const search = ref('');
const router = useRouter();

const produtos = ref<IProduto[]>([]);

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Nome', value: 'nome' },
  { text: 'Preço', value: 'price' },
  { text: 'Descrição', value: 'description' },
  { text: 'Estoque', value: 'stock' },
  { text: 'Criado Em', value: 'createdAt' },
];

const carregarProdutos = async () =>{
  try{
  produtos.value = await getAllProducts(); 
} catch(error){

}
}
const goToNovoProduto = () => {
  router.push('/dashboard/novo-produto');
};
onMounted(() => {
  carregarProdutos();
});
</script>