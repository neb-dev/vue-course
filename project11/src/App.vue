<template>
  <div>
    <the-header></the-header>
    <button @click="setComponent('active-goals')">Active Goals</button>
    <button @click="setComponent('manage-goals')">Manage Goals</button>

    <keep-alive>
      <component :is="component"></component>
    </keep-alive>

    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->

    <!-- to cut the template tag out you can add #default="slotProps" to course-goals tag but only when the content belongs to a single (default) slot -->
    <!-- <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.goalData }}</h2>
        <p>{{ slotProps['extraData'] }}</p>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    // can still be accessed using <the-header></the-header> or <TheHeader /> but not <the-header />
    // TheHeader: TheHeader
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // CourseGoals,
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      component: '',
    };
  },
  methods: {
    setComponent(cmp) {
      this.component = cmp;
    },
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
