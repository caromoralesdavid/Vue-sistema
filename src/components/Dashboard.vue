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
      // Realizar lógica de cierre de sesión aquí si es necesario
      // Por ejemplo, llamar a una API para cerrar sesión o eliminar los tokens de acceso

      this.$router.push({ name: "Home" });
    },
  },
};
</script>
