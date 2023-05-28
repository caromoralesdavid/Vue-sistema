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
      registros: {
        cedula: '',
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
        const response = await fetch("/registro-asistencia", {
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
          alert('Entrada registrada!')
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
    marcarSalida() {
      // Lógica para marcar la salida
    },
  },
};
</script>