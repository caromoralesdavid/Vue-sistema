<template>
  <div class="login">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login" class="form">
      <div class="user">
        <label for="username">Usuario:</label>
        <input type="text" id="username" v-model="username" placeholder="Ingrese su usuario..." required />
      </div>
      <div class="password">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" placeholder="Ingrese su contraseña..." required />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form> <br>
    <div>
      <a href="/reset-password">¿Olvidaste tu contraseña?</a>
    </div>
  </div>
</template>

<style>
  .login {
    width: 300px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    color: #007bff;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .user,
  .password {
    margin-bottom: 10px;
  }

  label {
    color: #007bff;
    font-weight: bold;
    font-size: 14px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #007bff;
    font-size: 14px;
  }

  button[type="submit"] {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 16px;
    margin-top: 20px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  }

  button[type="submit"]:hover {
    background-color: #00bcd4;
  }

  a {
    color: #007bff;
    font-size: 14px;
    text-decoration: none;
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
    login() {
      if (this.username === "david" && this.password === "david") {
        // Inicio de sesión exitoso
        alert("¡Inicio de sesión exitoso!");
        // Redirigir a otra página:
        this.$router.push("/dashboard");
      } else {
        // Credenciales inválidas
        alert("Credenciales inválidas. Inténtalo de nuevo.");
      }
    },
    logout() {
      this.$router.push("/login.vue");
    },
  },
};
</script>
