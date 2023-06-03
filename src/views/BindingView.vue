<script setup>
import { onMounted, onUpdated, ref, watch } from "vue";

const email = ref("");
const isEmailCorrect = ref(false);

watch(email, (newValue) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmailCorrect.value = emailRegex.test(newValue);
});

const el = ref();

onMounted(() => {
  console.log("Mounted");
});
</script>

<template>
  <div ref="el">
    <div>Input Email: {{ email }}</div>
    <input
      type="email"
      v-model="email"
      :class="{
        'text-red-500': !isEmailCorrect,
        'text-gray-700': isEmailCorrect,
      }"
      class="mt-2 mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="inline-email"
      placeholder="E-mail"
    />
    <p v-if="isEmailCorrect">Valid email address!</p>
    <p v-else>Email address is invalid.</p>
  </div>
</template>
