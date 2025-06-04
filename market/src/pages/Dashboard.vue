<template>
  <v-layout style="height: 100vh;">
    <!-- Drawer lateral fixo -->
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <!-- Usuário -->
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- Menu de navegação -->
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-cart-outline"
          title="Produtos"
          value="produtos"
          to="/dashboard/produtos"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Área principal -->
    <v-main>
      <!-- Barra de topo -->
      <v-app-bar flat  dark>
        <v-app-bar-title>Market</v-app-bar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

      <!-- Área que troca com as rotas filhas -->
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
const rail = ref(true);
</script>