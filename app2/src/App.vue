<template>
  <ul>
    <learning-resource v-for="item in storedResources" :key="item.id"></learning-resource>
  </ul>
</template>

<script>
import LearningResource from '../components/learning-resources/LearningResource.vue';
export default {
  components: {
    'learning-resource': LearningResource
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
