import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import HeaderApp from './HeaderApp/App.vue'
import TicketApp from './TicketApp/App.vue'
import AddTicketForm from './TicketApp/AddTicketForm.vue'
import EditTicketForm from './TicketApp/EditTicketForm.vue'
import TicketDetail from './TicketApp/TicketDetail.vue'
import TicketList from './TicketApp/TicketList.vue'

const Header = createApp(HeaderApp)
Header.mount('#header')

const routes = [
    { path: '/', component: TicketList },
    { path: '/create', component: AddTicketForm },
    { path: '/details', component: TicketDetail },
    { path: '/edit', component: EditTicketForm }
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
const Ticket = Vue.createApp(TicketApp)
Ticket.use(router);
Ticket.mount('#ticket-control')

createApp(App).mount('#app')
