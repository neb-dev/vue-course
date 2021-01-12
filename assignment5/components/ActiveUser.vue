<template>
<div v-if="user">
<h2>Username: {{ user.name }}</h2>
  <h3>Age: {{ user.age }}</h3>
</div>
<h1 v-else>No User</h1>
  
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  }
};
</script>
