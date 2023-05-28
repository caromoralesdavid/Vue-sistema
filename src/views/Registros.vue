<template>
  <div class="encabezado">
    <header>
      <h1>CONTROL DE ASISTENCIAS</h1>
    </header>

    <img alt="Vue logo" class="logo" src="@/components/icons/LogoAsistencia.png" width="125" height="125" />
    <div class="content">
      <label for="cedula" class="label">Ingrese su cédula:</label><br>
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

<style>
.encabezado {
  font-size: 14px;
  font-weight: bold;
}

.logo {
  border-radius: 50%;
}

.content {
  font-size: 14px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

.label {
  font-size: 16px;
  max-width: 200px;
}

input {
  border-radius: 10px;
  padding: 8px;
  font-size: 14px;
}

.entrada {
  background-color: greenyellow;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 10px;
  /* Agregamos margen a la derecha */
}

.entrada:hover {
  background-color: rgb(49, 250, 49);
  cursor: pointer;
  color: antiquewhite;
}

.salida {
  background-color: rgb(245, 0, 0);
  font-size: 14px;
  border-radius: 10px;
}

.salida:hover {
  background-color: rgb(255, 218, 6);
  cursor: pointer;
  color: antiquewhite;
}

.acceso {
  font-weight: bold;
  font-size: 14px;
}

.acceso:hover {
  cursor: pointer;
  border-radius: 5px;
}
</style>




<script>
export default {
  data() {
    return {
      registros: {
        cedula: "",
      },
    };
  },
  methods: {
    async marcarEntrada() {
      try {
        // Obtener la fecha y hora actual
        const fecha = new Date().toISOString().slice(0, 10);
        const hora = new Date().toLocaleTimeString();

        // Enviar la solicitud al servidor para registrar la entrada en la base de datos
        const response = await fetch("http://localhost:3000/registro-asistencia", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cedula: this.cedula,
            fecha: fecha,
            hora: hora,
          }),
        });

        if (response.ok) {
          // La entrada se registró correctamente
          const data = await response.json();
          console.log(data.mensaje);
        } else {
          // Manejar el caso de error en el registro de entrada
          const errorData = await response.json();
          console.error("Error al registrar la entrada:", errorData.error);
        }
      } catch (error) {
        // Manejar el error de la petición
        console.error("Error de red:", error);
      }
    },
    async marcarSalida() {
      try {
        // Obtener la fecha y hora actual
        const fecha = new Date().toISOString().slice(0, 10);
        const hora = new Date().toLocaleTimeString();

        // Enviar la solicitud al servidor para registrar la salida en la base de datos
        const response = await fetch("http://localhost:3000/registro-asistencia", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cedula: this.cedula,
            fecha: fecha,
            hora: hora,
          }),
        });

        if (response.ok) {
          // La salida se registró correctamente
          const data = await response.json();
          console.log(data.mensaje);
        } else {
          // Manejar el caso de error en el registro de salida
          const errorData = await response.json();
          console.error("Error al registrar la salida:", errorData.error);
        }
      } catch (error) {
        // Manejar el error de la petición
        console.error("Error de red:", error);
      }
    },
  },
};
</script>