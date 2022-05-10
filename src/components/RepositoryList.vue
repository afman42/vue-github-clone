<template>
  <section class="repositories">
    <template v-for="repo in reposList" :key="repo.id">
      <RepositoryItem :repoItem="repo" :userItem="userList" />
    </template>
  </section>
</template>

<script>
import RepositoryItem from "./RepositoryItem.vue";
export default {
  name: "RepositoryList",
  props: {
    reposList: Array,
    userList: Object,
  },
  components: {
    RepositoryItem,
  },
};
</script>