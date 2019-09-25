<template>
  <div>

    <h1 class="centralizado">App Pic</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :url="foto.url" :titulo="foto.titulo">
          <meu-botao rotulo="remover" tipo="button" @click.native="remove(foto)"/>
        </meu-painel>
        </li>
    </ul>

  </div>
</template>

<script>
import Painel from '../shared/painel/Painel'
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva'
import Botao from '../shared/botao/Botao'

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  methods: {
      remove(foto) {
          if(confirm('Confirma?')) {
          alert(foto.titulo);
      }
      }
  },

  data () {
    return {
      fotos: [],
      filtro: ''
    }
  },

  computed: {

    fotosComFiltro() {

      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created () {

    this.$http
      .get('http://localhost:3001/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }

</style>