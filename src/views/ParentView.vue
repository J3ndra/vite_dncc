<template>
  <div>
    <h1>Parent Component</h1>
    <Child :message="message" @updateMessage="updateMessage"></Child>
    <p>Received message: {{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "../components/Child.vue";

const message = ref("");

const updateMessage = (newValue) => {
  message.value = newValue;
};
</script>
