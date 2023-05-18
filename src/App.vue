<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <body>
    <header>
      <h1>CONTROL DE ASISTENCIAS</h1>
    </header>

    <img
      alt="Vue logo"
      class="logo"
      src="@/components/icons/LogoAsistencia.png"
      width="125"
      height="125"
    />
    <div class="content">
      <!-- <div class="wrapper"> -->
      <HelloWorld msg="CC ASISTENCIAS" />
      <label for="input-text">Ingrese su cédula: </label>
      <input type="text" id="input-text" />
      <button class="entrada">Entrada</button>
      <button class="entrada">Salida</button>
    </div>
  </body>
  <router-link to="/login">Acceso</router-link>
  <RouterView />
</template>
