import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Authentification from "@/views/Authentification.vue";
import Projet from "@/views/Projet.vue";
import Services from "@/views/Services.vue";
import Evenements from "@/views/Evenements.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/authentification",
    name: "Authentification",
    component: Authentification,
  },
  {
    path: "/projet",
    name: "Projet",
    component: Projet,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/evenements",
    name: "Evenements",
    component: Evenements,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
