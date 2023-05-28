<template>
  <div class="reset-password-container">
    <h2>Restablecer contraseña</h2>
    <form @submit.prevent="resetPassword" class="form">
      <div>
        <label for="email" class="label">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" placeholder="Ingrese su correo..." required />
      </div>
      <div>
        <label for="newPassword" class="label">Nueva contraseña:</label>
        <input type="password" id="newPassword" v-model="newPassword" placeholder="Ingrese nueva contraseña..." required />
      </div>
      <div>
        <label for="confirmPassword" class="label">Confirmar contraseña:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirmar contraseña..." required />
      </div>
      <button type="submit" class="button">Restablecer contraseña</button>
    </form>
  </div>
</template>

<style>
.reset-password-container {
  border: 1.5px solid #0ee06d;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 5px 1px #d40fba;
  padding: 20px;
  text-align: center;
  width: 300px;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  display: block;
}

h2 {
  color: #333333;
  font-size: 24px;
  margin-bottom: 20px;
}

.form {
  text-align: center;
  justify-content: center;
  /* display: flex; */
  /* flex-direction: center; */
  align-items: center;
}

.label {
  color: #4382b0;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  max-width: 16px;
}

input {
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  /* width: 200px; */
  margin-bottom: 10px;
}

.button {
  background-color: #4382b0;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background-color: #5edf23;
}
</style>


<script>
export default {
  data() {
    return {
      email: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    resetPassword() {
      // Restablecer la contraseña
      // utilizando los valores de "email", "newPassword" y "confirmPassword"
      // Verificar si las contraseñas coinciden
      if (this.newPassword !== this.confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        return;
      }
      //Llamada a la API para restablecer la contraseña
      
      // axios.post('/api/reset-password', {
      //   email: this.email,
      //   newPassword: this.newPassword
      // })
      //   .then(response => {
      //     // Restablecimiento de contraseña exitoso
      //     alert('La contraseña se ha restablecido correctamente.');
      //     // Redirigir a la página de inicio de sesión u otra página según corresponda
      //     this.$router.push('/login');
      //   })
      //   .catch(error => {
      //     // Error al restablecer la contraseña
      //     alert('Ocurrió un error al restablecer la contraseña. Por favor, inténtalo de nuevo.');
      //   });
    },
  },
};
</script>
