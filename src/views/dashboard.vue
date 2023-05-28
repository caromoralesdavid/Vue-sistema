<template>
  <div class="dashboard">
    <div class="sidebar">
      <h2>Assistant Web</h2>
      <button @click="crearUsuario">
        <router-link to="./CrearUsuario">Nuevo Usuario</router-link>
      </button>
      <button @click="editarUsuario">
        <router-link to="">Editar Usuario</router-link>
      </button>
      <button @click="eliminarUsuario">
        <router-link to="./EliminarUsuario">Eliminar Usuario</router-link>
      </button>
      <button>
        <router-link to="./login">Volver</router-link>
      </button>
      <button @click="logout">Cerrar sesión</button>
    </div>

    <div class="content-2">

      <!-- <h3>Usuarios con acceso:</h3>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul> -->

      <h3>Opciones de administración:</h3>
      <div>
        <!-- Contenido del dashboard -->
      </div>


    </div>
  </div>
</template>

<style>
.dashboard {
  display: flex;
  height: 100vh;
  border-radius: 10px;
}

.sidebar {
  width: 200px;
  background-color: #6a8bb6;
  padding: 20px;
  border-radius: 10px;
}

.sidebar button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: #dddddd;
  color: #0a0a0a;
  text-align: left;
  cursor: pointer;
}

.sidebar button:hover {
  background-color: #4e89d6;
}

.content-2 {
  flex: 1;
  padding: 20px;
}

h2 {
  color: #333333;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  border-bottom: 2px solid #0ee06d;
  padding-bottom: 5px;
  font-style: italic;
  /* color: #333333;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  border-color: #0ee06d; */
}

h3 {
  color: #333333;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

button {
  background-color: #3e7e3c;
  color: #000000;
  border: none;
  padding: 10px 16px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0ee06d;
}
</style>

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
