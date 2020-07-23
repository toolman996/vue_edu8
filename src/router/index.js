import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Course from "../components/Course";
import CourseDetail from "../components/CourseDetail";
import Shoppingcart from "../components/Shoppingcart";
import CartItem from "../components/common/CartItem";
import Order from "../components/Order";
import PaymentSuccess from "../components/PaymentSuccess";


Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/home/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/user/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/course',
            name: 'register',
            component: Course,
        },
        {
            path: '/course/:id',
            name: 'detail',
            component: CourseDetail,
        },
        {
            path: '/shoppingcart',
            name: 'shoppingcart',
            component: Shoppingcart,
        },
        {
            path: '/cartitem',
            name: 'cartitem',
            component: CartItem,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
        },
        {
            path: '/payoff/result',
            name: 'paymentsuccess',
            component: PaymentSuccess,
        },
    ]
})
