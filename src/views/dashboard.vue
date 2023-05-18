<template>
  <div>
    <h2>Dashboard</h2>
    <h3>Usuarios con acceso:</h3>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>

    <h3>Opciones de administración:</h3>
    <div>
      <button @click="crearUsuario">Crear nuevo usuario</button>
      <button @click="editarUsuario">Editar usuario</button>
      <button @click="eliminarUsuario">Eliminar usuario</button>
    </div>

    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async crearUsuario() {
      try {
        // Realiza una petición a tu API para crear un nuevo usuario
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Datos del nuevo usuario
          }),
        });

        if (response.ok) {
          // El usuario se creó correctamente
          const newUser = await response.json();
          this.users.push(newUser);
          // Realiza alguna acción adicional si es necesario
        } else {
          // Maneja el caso de error en la creación del usuario
        }
      } catch (error) {
        // Maneja el error de la petición
      }
    },
  },
  logout() {
    this.$router.push("/login");
  },
};
</script>
