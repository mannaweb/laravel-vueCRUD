import { createWebHistory, createRouter } from "vue-router";
import Employee from "./components/employee.vue";
import User from "./components/user.vue";
import Home from "./components/home.vue";
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/employees",
      name: "Employees",
      component: Employee,
    },
    {
      path: "/users",
      name: "Users",
      component: User,
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;