<template>
<!-- vue 3 no longer requires a single top level element (div, etc) -->
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <error-alert v-if="isInvalid">
      <h2>Input is invalid</h2>
      <p>Input cannot be empty.</p>
      <button @click="confirmError">OK</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const value = this.$refs.goal.value;
      if (value === '') {
        this.isInvalid = true;
      }
    },
    confirmError() {
      this.isInvalid = false;
    },
  },
};
</script>
