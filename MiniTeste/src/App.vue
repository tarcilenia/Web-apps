<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <a :href="movie.link">
          <img :src="movie.image" alt="Movie poster" />
          {{ movie.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    const response = await axios.get(
      'https://imdb-api.projects.thetuhin.com/search?query=Avengers'
    );
    this.movies = response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: movie.image,
      link: `https://www.imdb.com/title/${movie.id}`,
    }));
  },
};
</script>