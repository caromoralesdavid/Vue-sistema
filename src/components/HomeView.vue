<template>
  <div>
    <h1>Home</h1>
    <form @submit.prevent="submitForm">
      <label for="cedula">Ingrese su cédula:</label>
      <input type="text" id="cedula" v-model="cedula" autocomplete="off" required />

      <button type="submit" @click="marcarEntrada">Entrada</button>
      <button type="submit" @click="marcarSalida">Salida</button>
    </form>
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
      // Realizar lógica para marcar entrada
      console.log("Entrada marcada");
    },
    marcarSalida() {
      // Realizar lógica para marcar salida
      console.log("Salida marcada");
    },
  },
};
</script>
