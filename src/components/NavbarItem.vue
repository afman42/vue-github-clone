<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <img
      :src="userNavbar.avatar_url"
      width="50"
      height="50"
      class="mr-3 avatar"
      alt="user"
    />
    <h3 style="color: white">{{ userNavbar.name }}</h3>

    <!-- <img src="../../../public/logo.png" alt="" /> -->

    <a class="ml-auto d-flex align-items-center" href="/">
      Search Other User
    </a>
  </nav>
</template>

<script>
// import { toRefs } from 'vue'
export default {
  props: {
    userNavbar: {
      type: Object,
      required: true
    },
  },
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  object-fit: cover;
}
</style>