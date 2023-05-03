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
      <a class="salida">Salida</a>
    </div>
    <!-- </div> -->
    <router-link to="./views/Registros.vue">Admin</router-link>

    <a href="./views/Registros.vue" class="admin-button">Administrador</a>
  </body>
  <RouterView />
</template>

<style>
header {
  font-size: 16px;
  color: #ffffff;
  /* border: 1px solid; */
}
body {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  align-items: left;
  justify-content: left;
  text-align: center;
}

.logo {
  justify-content: left;
  margin-right: 1rem;
  border-radius: 50%;
  border: 3px solid #fff;
}

.content {
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  flex-direction: column;
  display: flex;
}

label {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.salida {
  margin-bottom: 1rem;
  margin-top: 1.4rem;
  border-radius: 15px;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}
.entrada {
  background-color: #008000;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.admin-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}
.admin-button:hover {
  background-color: #0062cc;
}
</style>
