<template>
  <div >
    <h1>{{ currentTime }}</h1>
    <div class="wrapper">
      <div class="main" v-for="(x, idx) in content" :key="idx">
      <ul :style="{ backgroundColor: idx % 2 === 0 ? 'green' : 'grey' }">
        <li
          v-for="(y, idx2) in x"
          :key="y.id"
          :style="{ color: idx2 % 2 !== 0 ? 'white' : 'red' }"
        >
          {{ y.name }}
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCurrentTime } from "../composables/useCurrentTime";

const content = ref([]);
const { currentTime } = useCurrentTime();

const abc = await fetch(`https://api.tvmaze.com/shows/19?embed=episodes`);

const json = await abc.json();
content.value = new Array(200).fill(json._embedded.episodes);
</script>

<style>
.main {
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid blue;
}

.wrapper{
  display: flex;
  flex-wrap: wrap;
}

</style>