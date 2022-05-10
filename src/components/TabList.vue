<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <p class="nav-link mb-0 active">Repositories {{ reposTab.length }}</p>
    </li>
    <li class="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="nav-link mb-0"
        :href="'https://github.com/' + userTab.login +'?tab=packages'"
      >
        Packages
      </a>
    </li>
    <li class="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="nav-link mb-0"
        :href="'https://github.com/orgs/' + userTab.login + '/people'"
      >
        People
      </a>
    </li>
    <li class="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="nav-link mb-0"
        :href="'https://github.com/' + userTab.login + '?tab=projects'"
      >
        Projects
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TabList",
  props: {
    reposTab: {
      type: Array,
      required: true
    },
    userTab: Object
  },
};
</script>

<style scoped>
.nav-tabs,
.nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  font-weight: bold;
  color: #000;
}
.nav-link {
  font-size: 14px;
  color: #586069;
}
</style>