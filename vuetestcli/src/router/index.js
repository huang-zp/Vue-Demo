import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

const Home = () => import('../view/home/Home')
const Cart = () => import('../view/cart/Cart')
const Category = () => import('../view/category/Category')
const Profile = () => import('../view/profile/Profile')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
