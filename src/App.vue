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
    <router-view></router-view>
    <div class="acceso">
      <router-link to="/login" target="_blank">Acceso</router-link>
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

<style>
body {
  padding: 10px;
  text-align: center;
  align-items: center;
  background-color: rgb(158, 202, 187);
}

.content {
  font-size: 14px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

.content input {
  border-radius: 10px;
}

.encabezado {
  font-size: 14px;
  font-weight: bold;
}

img {
  border-radius: 50%;
}

.entrada {
  background-color: greenyellow;
  size: 18px;
  font-size: 14px;
  border-radius: 10px;
}

.entrada:hover {
  background-color: rgb(49, 250, 49);
  cursor: pointer;
  color: antiquewhite;
}

.salida {
  background-color: rgb(245, 0, 0);
  size: 18px;
  font-size: 14px;
  border-radius: 10px;
}

.salida:hover {
  background-color: red;
  cursor: pointer;
  color: antiquewhite;
}
.acceso{
  font-weight: bold;
  font-size: 14px;
}
.acceso:hover{
  cursor: pointer;
  border-radius: 5px;
}
</style>