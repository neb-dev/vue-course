<template>
  <div>
      <!-- v-if="$slots.header" determines if a slot has received content or not and will remove the element if nothing was received -->
    <header v-if="$slots.header">
      <!-- You can set default content if nothing is dynamically nested inside -->
      <!-- <h2>Default Content</h2>-->
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // this is logged twice when reloading because the slot is used twice in the app
    // this.$slots.header or this.$slots.default
    console.log(this.$slots.headeer);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
