<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- to cut the template tag out you can add #default="slotProps" to course-goals tag but only when the content belongs to a single (default) slot -->
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.goalData }}</h2>
        <p>{{ slotProps['extraData'] }}</p>
      </template>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    'the-header': TheHeader,
    'badge-list': BadgeList,
    'user-info': UserInfo,
    CourseGoals,
    // can still be accessed using <the-header></the-header> or <TheHeader /> but not <the-header />
    // TheHeader: TheHeader
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
