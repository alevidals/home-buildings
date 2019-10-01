import Vue from 'vue'
import Router from 'vue-router'
import { getModule } from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: () => import("@/views/MainView.vue") },
        { path: '/services', name: 'services', component: () => import("@/views/ServicesView.vue") },
        { path: '/modern-houses', name: 'modern-houses', component: () => import("@/views/ModernHouseView.vue") },
        { path: '/coloured-houses', name: 'coloured-houses', component: () => import("@/views/ColouredHousesView.vue") },
        { path: '/contact', name: 'contact', component: () => import("@/views/ContactView.vue") },
        { path: '/our-works', name: 'our-works', component: () => import("@/views/OurWorksView.vue") },
        { path: '/about', name: 'about', component: () => import("@/views/AboutView.vue") },
        { path: '/mansions', name: 'mansions', component: () => import("@/views/MansionsView.vue") },
        { path: '/cottages', name: 'cottages', component: () => import("@/views/CottageView.vue") },
        // { path: '/admin/login', name: 'login', component: () => import("@/views/LoginView.vue") },
        // { path: '/panel', name: 'panel', component: () => import("@/views/PanelView.vue") },
        { path: '*', redirect: { name: 'home' } }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router

router.beforeEach(async (to, from, next) => {
    // if (to.path == "/login" && !getModule(SessionModule).isAdmin) {
    //   return next({path:"/"})
    // }
    let sessionModule: SessionModule = getModule(SessionModule)
    sessionModule.loadAdmin()
    if (to.path == "/panel" && !sessionModule.isAdmin) {
        return next({ path: "/" })
    }
    next()
})