<template>
  <li>
    <h2>{{ friend.name }} {{ isSelected ? 'Selected' : '' }}</h2>
    <button @click="setSelected">Select</button>
    <button @click="toggleVis">{{ isVis ? 'Hide' : 'Show' }} Details</button>
  </li>
  <ul v-if="isVis">
    <li><strong>Phone:</strong>{{ friend.phone }}</li>
    <li><strong>Email:</strong>{{ friend.email }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean, // can be constructor function like Date()
      required: false,
      default: false, // value can be a function
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // },
    },
  },
  data() {
    return {
      isVis: false,
      isSelected: this.selected, // set prop value to component data variable
    };
  },
  methods: {
    toggleVis() {
      this.isVis = !this.isVis;
    },
    setSelected() {
      this.isSelected = !this.isSelected;
    },
  },
};
</script>
