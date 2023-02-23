<template>
  <div class="grid sm:grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-40 min-h-screen bg-background">
    <Card v-for="(persona, index) in personasAPI" :key="index" :name="truncate(persona.name,2)" :lastname="persona.lastname"></Card>
  </div>
</template>

<script setup>
import Card from './components/Card.vue';
import axios from "axios";

let personasAPI = null;

axios.get("https://gorest.co.in/public/v2/users").then((result) => {
  personasAPI = result.data;
  console.log(personasAPI);
})

function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

const personas = {
  persona1: {
    name: "Efra",
    lastname: "Arenas"
  },
  persona2: {
    name: "Jesus",
    lastname: "Kuantik"
  },
  persona3: {
    name: "Marty",
    lastname: "McFly"
  },
  persona4: {
    name: "William",
    lastname: "Gibson"
  }
}
</script>