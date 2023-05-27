<template>
  <div>
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
      <!-- <HelloWorld msg="CC ASISTENCIAS" /> -->
      <label for="input-text">Ingrese su cédula:</label>
      <!-- <input type="text" id="input-text" v-model="cedula" /> -->
      <input type="text" id="input-text" v-model="cedula" autocomplete="off" />

      <button class="entrada" @click="marcarEntrada">Entrada</button>
      <button class="entrada" @click="marcarSalida">Salida</button>
    </div>

    <router-view></router-view>
    <!-- Utiliza "router-view" en lugar de "RouterView" -->
    <router-link to="/dashboard">Acceso</router-link>
    <!-- Utiliza "router-link" en lugar de "RouterLink" -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cedula: "",
    };
  },
  methods: {
    marcarEntrada() {
      // Realizar la solicitud a la API o servidor backend para registrar la entrada
      // ...
    },
    marcarSalida() {
      // Realizar la solicitud a la API o servidor backend para registrar la salida
      // ...
    },
  },
};
</script>
