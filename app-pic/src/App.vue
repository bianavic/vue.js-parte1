<template>
  <div class="corpo">

    <h1 class="centralizado">{{ titulo }}

       <img v-for="foto in fotos" :src="foto.url" :alt="foto.titulo">

      <input type="search" class="filtro" placeholder="filtre pelo titulo da foto">

      <ul class="lista-fotos">       
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
      </ul>
    </nav>

    <transition name="pagina">
    <router-view></router-view>
    </transition>

  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu'

export default {

  components: {
    'meu-menu' : Menu
  },

  data() {
    return {
      routes,
      titulo: "Alura",
      fotos: []

    }
  },
  created() {

    alert('funcionou')

  }
}
</script>

<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>