<template>
  <li>
    <h2>{{ friend.name }} {{ isSelected === 1 ? 'Selected' : '' }}</h2>
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
    friend: Object,
    selected: Number,
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
      if(this.isSelected === 1) {
        this.isSelected = 0;
      } else {
        this.isSelected = 1;
      }      
    }
  },
};
</script>
