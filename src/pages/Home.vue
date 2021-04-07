<template>
  <div id="home">
    <div v-if="loading" class="list-movies">
      <Loading ></Loading>
    </div>
    <div v-else class="list-movies">
      <article class="movie" v-for="movie in movies" :key="movie.id">
        <strong>{{movie.nome}}</strong>
        <img :src="movie.foto" :alt="movie.nome">
        <router-link :to="`/movie/${movie.id}`">Acessar</router-link>
      </article>
    </div>
  </div>
</template>

<script>

import api from './../service/api';
import Loading from './../components/Loading'

export default {
  name: 'Home',
  components: {
    Loading
  },
  data(){
    return{
      loading: true,
      movies: []
    }
  },
  async created(){
    const response = await api.get('?api=filmes');
    this.movies = response.data;
    this.loading = false;
  }
}
</script>

<style scoped>
      #home{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 800px;
    }

    .list-movies{
        margin:15px;
    }

    .list-movies article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        margin: 15px;
        padding: 15px; 
        border-radius: 5px;
    }

    .list-movies strong{
        padding-bottom: 15px;
        font-size: 20px;
    }

    img{
      max-height: 350px;
      width: 900px;  
    }

    .list-movies article a{
        text-decoration: none;
        color: #FFF;
        font-size: 25px;
        background-color: brown;
        width: 100%;
        height: 40px;
        margin-top: -30px;
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px; 
    }
</style>