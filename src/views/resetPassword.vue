<template>
  <h2>Restablecer contraseña</h2>
  <form @submit.prevent="resetPassword">
    <div>
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div>
      <label for="newPassword">Nueva contraseña:</label>
      <input type="password" id="newPassword" v-model="newPassword" required />
    </div>
    <div>
      <label for="confirmPassword">Confirmar contraseña:</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" required />
    </div>
    <button type="submit">Restablecer contraseña</button>
  </form>
</template>

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
