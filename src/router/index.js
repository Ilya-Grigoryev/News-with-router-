import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ru from '../views/ru.vue'
import us from '../views/us.vue'
import bg from '../views/bg.vue'
import de from '../views/de.vue'
import ua from '../views/ua.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ru',
    name: 'ru',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ru,
  },
  {
    path: '/us',
    name: 'us',
    component: us
  },
  {
    path: '/bg',
    name: 'bg',
    component: bg
  },
  {
    path: '/de',
    name: 'de',
    component: de
  },
  {
    path: '/ua',
    name: 'ua',
    component: ua
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
