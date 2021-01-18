<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :goalData="goal" extraData="some extra data"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue'],
    };
  },
};
</script>
