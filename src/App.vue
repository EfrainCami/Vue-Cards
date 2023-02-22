<template>
  <div class="grid sm:grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-40 min-h-screen bg-background">
    <Card v-for="(persona, index) in personas" :key="index" :name="persona.name" :lastname="persona.lastname"></Card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from './components/Card.vue';
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