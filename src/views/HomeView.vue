<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref, computed, onMounted } from "vue";

// const msg = "Hello Home!";

// const deadline = ref("2023-06-03");
// const hariIni = ref("2023-06-03");
// const selesai = ref(false);

// const isDeadlineToday = computed(() => {
//   return deadline.value === hariIni;
// });

// const isTaskCompleted = computed(() => {
//   return selesai.value;
// });
const awesome = ref(true);

// Handling Event
const count = ref(0);

// Fungsi untuk menangani klik tombol
const handleClick = () => {
  count.value++;
};

// Event modifier
const handleClickEventModifier = () => {
  console.log("Hai cantik");
};

onMounted(() => {
  const button = document.querySelector("button");
  button.addEventListener("click", handleClickEventModifier);
});

// List Rendering
const items = ref([
  { id: 1, name: "Bawang", price: 1000 },
  { id: 2, name: "Semongko", price: 2000 },
  { id: 3, name: "Lombok", price: 3000 },
]);
</script>

<template>
  <!-- <main>
    <h1 class="text-red-400">{{ msg }}</h1>
    <TheWelcome />
  </main> -->
  <!-- <div>
    <h1>Conditional Rendering</h1>

    <div v-if="isDeadlineToday">Deadline hari ini</div>

    <div v-else-if="!isTaskCompleted">Tugas belum selesai</div>

    <div v-else>Tugas sudah selesai</div>
  </div> -->
  <div>
    <!-- Condition Rendering -->
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1"
        @click="awesome = !awesome"
      >
        Toggle
      </button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>

    <!-- Handling Event -->
    <div class="mt-4">
      <button
        @click="handleClick"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Klik Saya
      </button>
      <p class="mt-1">Anda telah mengklik saya sebanyak {{ count }} kali.</p>
    </div>

    <!-- Event Modifier -->
    <div class="mt-4">
      <button
        @click.stop="handleClickEventModifier"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Klik Akuu
      </button>
    </div>

    <!-- List Rendering -->
    <div class="mt-4">
      <h1 class="text-2xl text-red-500 font-bold">
        List Rendering - Data Blonjoan
      </h1>
      <ul class="mt-1">
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>
