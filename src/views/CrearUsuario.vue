<template>
  <div>
    <h2>Crear nuevo usuario</h2>
    <form @submit="crearUsuario">
      <label for="username">Nombre de usuario:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Crear usuario</button>
    </form>
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
    async crearUsuario() {
      try {
        // pide a la API para crear un nuevo usuario
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (response.ok) {
          // El usuario se creó correctamente
          const newUser = await response.json();
          this.$router.push("/dashboard");
        } else {
          // Maneja el caso de error en la creación del usuario
          const errorData = await response.json();
          console.error("Error al crear usuario:", errorData.message);
        }
      } catch (error) {
        // Maneja el error de la petición
        console.error("Error de red:", error);
      }
    },
  },
};
</script>
