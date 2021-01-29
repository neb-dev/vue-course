<template>
  <ul>
    <learning-resource
      v-for="item in storedResources"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :link="item.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from '../components/learning-resources/LearningResource.vue';
export default {
  components: {
    'learning-resource': LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google.',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
