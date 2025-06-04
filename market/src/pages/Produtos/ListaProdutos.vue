<template>
  <v-container fluid>
    <!-- Cabeçalho da tela -->
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

    <!-- Tabela de produtos -->
    <v-data-table
      :headers="headers"
      :items="produtos"
      :search="search"
      class="mt-4"
    ></v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const search = ref('');
const router = useRouter();

const produtos = ref([
  { id: 1, nome: 'Produto A', preco: 10.5 },
  { id: 2, nome: 'Produto B', preco: 20.0 },
  { id: 3, nome: 'Produto C', preco: 15.75 },
]);

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Nome', value: 'name' },
  { text: 'Preço', value: 'price' },
  { text: 'Descrição', value: 'description'},
  { text: 'Estoque', value: 'stock'},
  { text: 'Criado Em', value: 'CreatedAt'}
];

const goToNovoProduto = () => {
  router.push('/dashboard/novo-produto');
};
</script>