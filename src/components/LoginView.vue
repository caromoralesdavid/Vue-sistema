<template>
  <div>
    <h1>Login</h1>
    <form @submit="login">
      <label for="username">Usuario:</label>
      <input type="text" id="username" v-model="username" required />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="password" required />

      <button type="submit">Iniciar sesión</button>
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
    login(event) {
      event.preventDefault();
      // Realizar lógica de inicio de sesión aquí
      // Por ejemplo, realizar una solicitud a una API para verificar las credenciales

      // Ejemplo de redirección después de un inicio de sesión exitoso
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>
<style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }

    .card {
      width: 300px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      margin: 0 auto;
      margin-top: 100px;
    }

    .card label {
      display: block;
      margin-bottom: 10px;
      color: #333333;
    }

    .card input[type="text"],
    .card input[type="password"] {
      width: 100%;
      padding: 8px;
      border-radius: 3px;
      border: 1px solid #cccccc;
    }

    .card input[type="submit"] {
      background-color: #4caf50;
      color: #ffffff;
      border: none;
      padding: 10px 16px;
      margin-top: 20px;
      border-radius: 3px;
      cursor: pointer;
    }

    .card input[type="submit"]:hover {
      background-color: #45a049;
    }

    .card label:hover {
      color: #007bff;
      cursor: pointer;
    }
  </style>
