import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "HomeView"
  },
  {
    path: "/:userName",
    component: UserView,
    name: "UserView"
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router