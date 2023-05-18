<template>
  <div>
    <h2>Dashboard</h2>
    <h3>Usuarios con acceso:</h3>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>

    <h3>Opciones de administración:</h3>
    <ul>
      <li>Crear nuevo usuario</li>
      <li>Editar usuario</li>
      <li>Eliminar usuario</li>
    </ul>

    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "Usuario 1" },
        { id: 2, name: "Usuario 2" },
        { id: 3, name: "Usuario 3" },
        // Agrega más usuarios según necesites
      ],
    };
  },

  logout() {
    this.$router.push("/login");
  },
};
</script>
