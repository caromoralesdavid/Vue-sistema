<template>
  <div class="contenedor-newUser">
    <div class="titleUser">
      <h2>Crear nuevo usuario</h2>
    </div>
    <form @submit="crearUsuario" class="newUser">
      <label for="username">Nombre de usuario:</label><br>
      <input type="text" id="username" v-model="username" required /><br>
      <label for="password">Contraseña:</label><br>
      <input type="password" id="password" v-model="password" required /><br>
      <button type="submit">Crear usuario</button>
    </form>
  </div>
</template>

<style>
.contenedor-newUser {
  display: block;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 450px;
  background-color: #f0f6f9;
  border: #30f529;
}

.titleUser {
  margin-bottom: 20px;
}

h2 {
  color: #000;
}

.newUser {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #000;
}

input[type="text"],
input[type="password"] {
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #fc0377;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #2caeba;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #30f529;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #4505bb;
}

button:focus {
  outline: none;
}
</style>


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
        const response = await fetch("http://localhost:3000/create-user", {
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
