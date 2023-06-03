<script setup>
import { ref, computed } from "vue";

const a = ref(5);
const b = ref(10);

const hasilPenjumlahan = computed(() => {
  return a.value + b.value;
});
</script>
<template>
  <div>
    <p>Nilai A: {{ a }}</p>
    <p>Nilai B: {{ b }}</p>
    <p>Hasil Penjumlahan: {{ hasilPenjumlahan }}</p>
  </div>
</template>
