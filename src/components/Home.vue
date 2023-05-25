<template>
  <div>
    <h1>Home</h1>
    <p>Bienvenido a la página de inicio</p>
    <button @click="redirectToLogin">Ir al inicio de sesión</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
