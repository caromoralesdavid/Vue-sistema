<template>
  <div>
    <h1>Dashboard</h1>
    <p>Bienvenido al panel de control</p>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<style>
.dashboard {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f2f2f2;
  padding: 20px;
}

.sidebar button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: #007bff;
  color: #ffffff;
  text-align: left;
  cursor: pointer;
}

.sidebar button:hover {
  background-color: #4e89d6;
}

.content {
  flex: 1;
  padding: 20px;
}

h2 {
  color: #333333;
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  color: #333333;
  font-size: 18px;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #4e89d6;
}
</style>
<script>
export default {
  methods: {
    logout() {
      // Realizar lógica de cierre de sesión aquí si es necesario
      // API para cerrar sesión y eliminar los tokens de acceso

      this.$router.push({ name: "Home" });
    },
  },
};
</script>
