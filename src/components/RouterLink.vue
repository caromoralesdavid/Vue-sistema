<template>
  <a :href="to" @click.prevent="navigate">
    <slot></slot>
  </a>

  <div>
    <header>
      <h1>CONTROL DE ASISTENCIAS</h1>
    </header>

    <img
      alt="Vue logo"
      class="logo"
      src="@/components/icons/LogoAsistencia.png"
      width="125"
      height="125"
    />
    <div class="content">
      <HelloWorld msg="CC ASISTENCIAS" />
      <label for="input-text">Ingrese su cédula:</label>
      <input type="text" id="input-text" />
      <button class="entrada">Entrada</button>
      <button class="entrada">Salida</button>
    </div>

    <RouterView />
    <RouterLink to="/login">Acceso</RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigate() {
      this.$router.push(this.to);
    },
  },
};
</script>
