<template>
<section>
<h2>Friends List</h2>
<ul>
    <li></li>
</ul>
</section>

</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'jessica',
          name: 'Jessica Lastname',
          phone: '1231234456',
          email: 'jess@email.com',
        },
        {
          id: 'josh',
          name: 'Joshua Lastname',
          phone: '1231234456',
          email: 'josh@email.com',
        },
      ],
    };
  },
};
</script>
