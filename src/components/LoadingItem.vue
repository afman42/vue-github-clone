<template>
  <div className="loading">
    <img src="../assets/spinner.gif" alt="loading" />
  </div>
</template>

<script>
export default {
  name: "LoadingItem",
};
</script>

<style scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
