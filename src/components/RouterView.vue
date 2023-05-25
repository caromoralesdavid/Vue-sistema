<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.$emit("route-change", to);
      next();
    });
  },
};
</script>
