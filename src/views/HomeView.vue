<script>
import { useRouter } from "vue-router";
export default {
  name: "HomeView",
  setup() {
    const username = prompt("Enter Github Username");
    const router = useRouter();
    if (username) {
      router.push({ name: "UserView", params: { userName: username } });
    }
  },
};
</script>