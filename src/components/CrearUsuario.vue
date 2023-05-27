<template>
    <div>
        <h2>Crear nuevo usuario</h2>
        <form>
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" required />

            <label for="password">Contraseña:</label>
            <input type="password" id="password" required />

            <button type="submit">Crear usuario</button>
        </form>
    </div>
</template>
<script>
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
    }
    }     
};
</script>