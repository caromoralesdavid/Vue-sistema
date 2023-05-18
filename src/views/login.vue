<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Usuario:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <div>
      <a href="/reset-password">¿Olvidaste tu contraseña?</a>
    </div>
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
    login() {
      if (this.username === "usuario" && this.password === "contrasena") {
        // Inicio de sesión exitoso
        alert("¡Inicio de sesión exitoso!");
        // Aquí puedes redirigir a otra página, por ejemplo:
        this.$router.push("/dashboard");
      } else {
        // Credenciales inválidas
        alert("Credenciales inválidas. Inténtalo de nuevo.");
      }
    },
  },
};
</script>
