<template>
  <div id="salved">
    <h1>Meus Filmes</h1> 
    <span v-if="movies.length <= 0">Você nao possui nenhum filme salvo :(</span>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <span>{{movie.nome}}</span>
        <div>
          <router-link tag="button" :to="`/movie/${movie.id}`">Ver detalhes</router-link>
          <button @click="excluir(movie.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      movies: [],
    }
  },
  created(){
    const myList = localStorage.getItem('myMovies');
    this.movies = JSON.parse(myList) || [];
  },
  methods:{
    excluir(id){
      let filter = this.movies.filter((movie) => {
        return (movie.id !== id);
      });
      return this.movies = filter;
    }
  },
  watch:{
    movies(){
      localStorage.setItem('myMovies', JSON.stringify(this.movies));
    }
  }
}
</script>

<style scoped>
  #salved{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  ul{
    padding: 0;
  }


  ul li{
    padding: 0;
    list-style: none;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span{
    font-size: 25px;
  }

  button{
    margin-left: 10px;
  }

</style>