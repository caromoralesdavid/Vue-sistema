<template>
  <div>
    <h1>Dashboard</h1>
    <p>Bienvenido al panel de control</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
