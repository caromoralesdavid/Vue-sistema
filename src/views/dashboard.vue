<template>
  <div>
    <h2>Dashboard</h2>
    <!-- <h3>Usuarios con acceso:</h3>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul> -->

    <h3>Opciones de administración:</h3>
    <div>
      <button @click="crearUsuario">
        <router-link to="../views/CrearUsuario">Crear nuevo usuario</router-link>
      </button>
      <button @click="editarUsuario">
        <router-link to="">Editar usuario</router-link>
      </button>
      <button @click="eliminarUsuario">
        <router-link to="">Eliminar usuario</router-link>
      </button>
      <button @click="">Volver</button>
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
          //
        } else {
          // Error en la creación del usuario
          const errorData = await response.json();
          console.error("Error al crear usuario:", errorData.message);
        }
      } catch (error) {
        // Error en la petición:
        console.error("Error de red:", error);
      }
    },
  },
  logout() {
    this.$router.push("/login");
  },
};
</script>
