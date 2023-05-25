<template>
  <div>
    <h1>Login</h1>
    <form @submit="login">
      <label for="username">Usuario:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      // Realizar lógica de inicio de sesión aquí
      // Por ejemplo, realizar una solicitud a una API para verificar las credenciales

      // Ejemplo de redirección después de un inicio de sesión exitoso
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>
