<template>
  <div>
    <NuxtLink to="/"><button>Back</button></NuxtLink>
    <h3>List of Episodes</h3>
    <!-- {{ "p" + pending }} -->
    <div style="display: flex; border: 1px solid red">
      <div class="shows" v-for="episode in fidel.slice(0, 3)" :key="episode.id">
        <div style="display: flex; flex-direction: column; height: 200px">
          <span>{{ episode.name + " SERVER" }}</span>
          <img :src="episode.image?.medium" />
        </div>
      </div>

      <div
        class="shows"
        v-for="episode in episodes.slice(3, 6)"
        :key="episode.id"
        style="display: flex; border: 1px solid blue"
      >
        <div style="display: flex; flex-direction: column; height: 200px">
          <span>{{ episode.name + "from client" }}</span>
          <img :src="episode.image?.medium" />
        </div>
      </div>
    </div>

    <video
      v-for="n in 20"
      :key="n"
      width="320"
      height="240"
      autoplay
      loop
      preload="metadata"
      muted
    >
      <source src="~/assets/sample-mp4-file.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const route = useRoute();

const episodes = ref([]);
const fidel = ref([]);

const abc = await fetch(
  `https://api.tvmaze.com/shows/${route.params.id}?embed=episodes`
);

const json = await abc.json();
fidel.value = json._embedded.episodes;

// episodes.value = data._embedded.episodes;

onMounted(async () => {
  const fetchData = await fetch(
    `https://api.tvmaze.com/shows/${route.params.id}?embed=episodes`
  );

  const json = await fetchData.json();
  episodes.value = json._embedded.episodes;
});
</script>