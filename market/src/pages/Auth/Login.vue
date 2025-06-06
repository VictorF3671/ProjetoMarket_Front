<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-4" style="width: 400px; height: 400px; justify-content: center;" elevation="9">
      <v-card-title class="text-center" style="font-weight: bold; margin-bottom: 50px;">Projeto Market</v-card-title>
      
      <v-card-text>
        <v-form >
          <v-text-field variant="outlined" label="Email" v-model="user.email" type="email" required></v-text-field>

          <v-text-field variant="outlined" label="Senha" v-model="user.password" type="password" required></v-text-field>

          <v-btn color="warning" @click="VerifyLogin" block>Entrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/plugins/axios'; 
import type { ILogin } from './ILogin';

const user = ref<ILogin>({
  email: '',
  password: '',
});

const router = useRouter();


async function VerifyLogin() {
  if (!user.value.email || !user.value.password) {
    console.log("deu erro")
    return;
  }
    try {
      console.log(user.value)
      const response = await axios.post('/auth/login', user.value);
      if (response.data.token) {
       const token = response.data.token 
       localStorage.setItem('token', token);
       router.push('/dashboard')
      }
    }catch(error){

    }
}
</script>