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
      username: "D.caro",
      password: "12345",
    };
  },
  methods: {
    login() {
      if (this.username === "D.caro" && this.password === "12345") {
        // Inicio de sesión exitoso
        alert("¡Inicio de sesión exitoso!");
        // Redirigir a otra página:
        this.$router.push("/dashboard");
      } else {
        // Credenciales inválidas
        alert("Credenciales inválidas. Inténtalo de nuevo.");
      }
    },
    logout() {
      this.$router.push("/login.vue");
    },
  },
};
</script>
