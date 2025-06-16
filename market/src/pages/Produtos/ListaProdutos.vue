<template>
  <v-container fluid>

    <v-row align="center" justify="space-between" class="pa-4" style="gap: 16px;">
      <div>
        <h1>Lista de Produtos</h1>
        <p class="text-subtitle-1">Lista de todos seus produtos cadastrados</p>
      </div>

      <div class="d-flex align-center" style="gap: 12px;">
        <v-text-field v-model="search" label="Buscar" prepend-inner-icon="mdi-magnify" dense hide-details
          variant="outlined" width="200px"></v-text-field>

        <v-btn color="primary" @click="goToNovoProduto" height="40" style="height: 50px;">
          Novo Produto
        </v-btn>
      </div>
    </v-row>


    <v-data-table :headers="headers" :items="produtos" :search="search"
      class="mt-4 produtos-table elevation-1 rounded-lg" outlined dense hide-default-footer>

      <template #item.actions="{ item }">
        <!-- <v-btn
          icon
          variant="text"
          size="x-small"
          @click="editProduct(item)"
        >
          <v-icon size="18">mdi-pencil</v-icon>
        </v-btn> -->
        <v-btn icon variant="text" size="x-small" @click="dialogDeleteProduct(item.id)">
          <v-icon size="18">mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <DialogConfirm v-model="confirmVisible" :title="title" :message="message" :confirm-text="confirmText"
      cancel-text="Não" @confirm="callDeleteProduct" />
  </v-container>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import type { IProduto } from './IProduto.ts';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { deleteProduct, getAllProducts } from '@/services/ProductServices';
import DialogConfirm from '@/components/DialogConfirm.vue'

const search = ref('');
const router = useRouter();
const confirmVisible = ref(false);
const title = ref('')
const message = ref('')
const confirmText = ref('')
const produtos = ref<IProduto[]>([]);
let pendingDeleteId: number;

const headers = ref([
  { title: 'Id', key: 'id', align: 'start' },
  { title: 'Nome', key: 'name', align: 'start' },
  { title: 'Preço', key: 'price', align: 'start' },
  { title: 'Descrição', key: 'description', align: 'start' },
  { title: 'Estoque', key: 'stock', align: 'start' },
  { title: 'Criado Em', key: 'createdAt', align: 'start' },
  { title: 'Ações', key: 'actions', align: 'center', sortable: false }
]);

const carregarProdutos = async () => {
  try {
    produtos.value = await getAllProducts();
  } catch (error) {

  }
}
const goToNovoProduto = () => {
  router.push('/dashboard/novo-produto');
};
function dialogDeleteProduct(id: number) {
  console.log("cheguei")
  pendingDeleteId = id;
  title.value = 'Confirmar Exclusão';
  message.value = 'Deseja realmente excluir o produto?';
  confirmText.value = 'Sim, excluir';
  confirmVisible.value = true;

}

const callDeleteProduct = async () => {
  if (pendingDeleteId) {
    try {
      console.log("to aqui")
      const response = await deleteProduct(pendingDeleteId);
      console.log(response)
      pendingDeleteId = 0;
      carregarProdutos()
    } catch (error) {
    }
  }
}
onMounted(() => {
  carregarProdutos();
});
</script>