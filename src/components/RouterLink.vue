<template>
  <a :href="to" @click.prevent="navigate">
    <slot></slot>
  </a>
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
