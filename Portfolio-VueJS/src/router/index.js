import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import AboutMe from '@/components/AboutMe'
import Boss from '@/components/Boss'
import Com from '@/components/Com'
import Design from '@/components/Design'
import Photo from '@/components/Photo'
import Boat from '@/components/Boat'
import Portfolio from '@/components/Portfolio'
import Planet from '@/components/Planet'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',            name: 'Accueil',        component: Accueil } ,
    { path: '/aboutme',     name: 'AboutMe',        component: AboutMe } ,
    { path: '/boss',        name: 'Boss',           component: Boss } ,
    { path: '/com',         name: 'Com',            component: Com } ,
    { path: '/design',      name: 'Design',         component: Design } ,
    { path: '/photo',       name: 'Photo',          component: Photo } ,
    { path: '/boat',        name: 'Boat',           component: Boat } ,
    { path: '/portfolio',   name: 'Portfolio',      component: Portfolio } ,
    { path: '/planet',      name: 'Planet',         component: Planet }
  ]
})
