<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="search" />
      <button @click="submit">Search</button>
    </form>

    <div class="shows">
      <div v-for="show in shows" :key="show.id">
        <nuxt-link :to="'/search/' + show.show.id">
          {{ show.show.name }}
          <img :src="show.show.image?.medium" alt="" />
        </nuxt-link>
      </div>
    </div>
    <!-- <NuxtLink to="/search">Go to search page</NuxtLink> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../app.css";

const shows = ref([]);
const search = ref("");
const URL = "https://api.tvmaze.com/search/shows?q=";

async function searchShows(search) {
  const grabData = await fetch(URL + search.value);
  const json = await grabData.json();
  shows.value = json;
}

async function submit() {
  if (!search.value) return;
  searchShows(search);
}
</script>