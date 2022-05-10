<template>
  <div>
    <template v-if="user">
      <NavbarItem :userNavbar="user" />
      <div class="container">
        <UserInfos :userInfos="user" />
        <TabList :reposTab="repositories" :userTab="user" />
        <RepositoryList :reposList="repositories" :userList="user" />
      </div>
    </template>
    <LoadingItem v-else />
  </div>
</template>

<script>
import NavbarItem from "../components/NavbarItem.vue";
import UserInfos from "../components/UserInfos.vue";
import TabList from "../components/TabList.vue";
import RepositoryList from "../components/RepositoryList.vue";
import LoadingItem from "../components/LoadingItem.vue";
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { getUserData, getUserRepositories } from '../http-common'
export default {
  name: "UserView",
  components: {
    NavbarItem,
    UserInfos,
    TabList,
    RepositoryList,
    LoadingItem
  },
  setup() {
    const route = useRoute()
    const user = ref("");
    const repositories = ref([]);
    const userNameParams = route.params.userName;
    async function fetchUser() {
      const { data } = await getUserData(userNameParams);
      user.value = data;
    }
    async function fetchRepositories() {
      const { data } = await getUserRepositories(userNameParams);
      // console.log(data)
      repositories.value = data;
    }
    onMounted(() => {
      fetchUser();
      fetchRepositories()
    })
    // console.log(repositories)
    return {
      user,
      repositories
    }
  },
};
</script>