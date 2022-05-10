<template>
  <div class="user-infos">
    <img
      :src="user.avatar_url"
      class="p-2 avatar"
      width="130"
      height="130"
      alt="User"
    />
    <div class="user">
      <h5>{{ user.name }}</h5>
      <div class="infos">
        <div v-if="user.location" class="info">
          <i class="fa fa-map-marker pr-1" />
          <span>{{ user.location }} · </span>
        </div>
        <div v-if="user.blog" class="info">
          <i class="fa fa-globe pr-1" />
          <span>{{ user.blog }} · </span>
        </div>
        <div v-if="user.email" class="info">
          <i class="fa fa-envelope pr-1" />
          <span>{{ user.email }} · </span>
        </div>
        <div v-if="user.twitter_username" class="info">
          <i class="fa fa-twitter pr-1" />
          <span>{{ user.twitter_username }} · </span>
          <br />
        </div>
        <div v-if="user.followers" class="info">
          <i class="fa fa-group" />
          <span>{{ user.followers }} Followers · </span>
        </div>
        <div v-if="user.following" class="info">
          <i class="fa fa-heart pr-1" />
          <span>{{ user.following }} Following </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfos",
  props: {
    userInfos: Object
  },
  setup(props) {
    return {
      user: props.userInfos,
    };
  },
};
</script>

<style scoped>
.user-infos {
  padding-bottom: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  /* // border-bottom: solid 1px #dedede; */
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.infos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.info {
  font-size: 14px;
  margin-right: 15px;
  color: #999797;
  display: flex;
  align-items: center;
}
</style>