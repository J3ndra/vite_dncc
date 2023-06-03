<template>
  <div>
    <h2 class="mb-2">Child Component</h2>
    <button
      class="mb-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      @click="sendMessage"
    >
      Send Message to Parent
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  message: String,
});

const sendMessage = () => {
  emit("updateMessage", "Hello from Child");
};

const emit = defineEmits(["updateMessage"]);
</script>
