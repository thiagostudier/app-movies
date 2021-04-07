<template>
  <div id="movie">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else class="container">
      <h2>{{movie.nome}}</h2>
      <img :src="movie.foto" alt="BANNER" />
      <h3>Sinopse</h3>
      <p>{{movie.sinopse}}</p>
      <div class="botoes">
        <router-link tag="button" to="/">Ver mais filmes</router-link>
        <button @click="saveMovie()">Salvar</button>
        <button><a :href="`https://youtube.com/results?search_query=${movie.nome}`" target="_blank">Trailer</a></button>
      </div>
    </div>
  </div>
</template>

<script>
  import api from "./../service/api";
  import Loading from './../components/Loading';
  export default{
    name: 'Movie',
    props: ['id'],
    components:{
      Loading
    },
    data(){
      return{
        movie: {},
        loading: true
      }
    },
    async created(){
      const response = await api.get(`?api=filmes/${this.id}`);
      this.movie = response.data;
      this.loading = false;
    },
    methods:{
      saveMovie(){
        // PEGAR FILMES SALVOS
        const myList = localStorage.getItem('myMovies');
        let movies = JSON.parse(myList) ?? [];
        
        //SE O FILME QUE ESTOU TENTANDO SALVAR ESTÁ DENTRO DA LISTA DOS SALVOS
        const hasMovie = movies.some((movie) => movie.id === this.movie.id) 
        if(hasMovie){
          alert('Filme já foi salvo!');
          return; //PARAR CODIGO 
        }

        // SALVAR NO STORAGE NOVO FILME SALVO
        movies.push(this.movie);
        localStorage.setItem('myMovies', JSON.stringify(movies));
      }
    }
  }
</script>

<style scoped>
.container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 900px;
    }

    h2{
      color: #FFF;
      margin-bottom: 0px;
      background: brown;
      padding: 15px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .container img{
        width: 100%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    button{
      margin-right: 5px;
      border-radius: 5px;
      margin-top: 15px;
      cursor: pointer;
      border:0;
      padding: 12px;
      font-size: 20px;
      transition: all 0.5s;
      outline: none;
    }
    button:hover{
      background: brown;
      color: #FFF;
    }

    a{
      text-decoration: none;
      color: #000;
      transition: all 0.5s;
    }

    a:hover{
      color: #FFF;
    }
</style>
