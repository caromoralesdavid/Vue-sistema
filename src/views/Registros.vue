<script></script>
<template>
    <div class="encabezado">
        <header>
            <h1>CONTROL DE ASISTENCIAS</h1>

        </header>

        <img alt="Vue logo" class="logo" src="@/components/icons/LogoAsistencia.png" width="125" height="125" />
        <div class="content">
            <label for="input-text">Ingrese su cédula:</label><br>
            <!-- <input type="text" id="input-text" v-model="cedula" /> -->
            <input type="text" id="input-text" v-model="cedula" autocomplete="off" /><br><br>
            <button class="entrada" @click="marcarEntrada">Entrada</button>
            <button class="salida" @click="marcarSalida">Salida</button>
        </div>
        <br>
        <div class="acceso">
            <router-link to="/login">Acceso</router-link>
        </div>
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
