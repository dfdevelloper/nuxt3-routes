<template>
  <div>
    <NuxtLink to="/"><button>Back</button></NuxtLink>
    <h3>List of Episodes</h3>

    <div class="shows" v-for="episode in episodes" :key="episode.id">
      <div>{{ episode.name }}</div>
      Season: {{ episode.season }} Ep: {{ episode.number }}
      <img :src="episode.image?.medium" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const route = useRoute();
const episodes = ref([]);

onMounted(async () => {
  const fetchData = await fetch(
    `https://api.tvmaze.com/shows/${route.params.id}?embed=episodes`
  );

  const json = await fetchData.json();
  episodes.value = json._embedded.episodes;
});
</script>