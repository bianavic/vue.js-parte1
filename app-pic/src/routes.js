import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    /* rotas aqui */
    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
  ];