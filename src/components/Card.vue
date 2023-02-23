<template>
    <div class="bg-card-secondary rounded-lg w-fit h-fit">
        <div class="bg-card-primary rounded-lg p-6 w-60 h-80">
            <div class="mb-8 rounded-full h-30 w-30">
                <img class="h-20 object-fill rounded-full" src="../assets/profile_pic.jpg" alt="Profile Pic">
            </div>
            <div class="m-3">
                <p class="text-gray-300 text-sm">Regart for</p>
                <p class="text-4xl text-white overflow-hidden text-ellipsis w-50">{{ name }}</p>
            </div>
        </div>
        <div class="p-8 space-y-3">
            <p class="text-gray-400">Daily</p>
            <p class="text-white">Weekly</p>
            <p class="text-gray-400">Monthly</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
      name: {
        type: String,
        default: "name"
      },
    });
</script>