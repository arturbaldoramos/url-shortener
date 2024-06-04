<script setup>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
  <header>
    <div
      class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div class="max-w-7xl mx-auto">
        <div class="border-b border-slate-900/10 py-4 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div class="relative flex items-center">
            <a class="space-x-2 text-3xl font-bold">
              <span class="text-sky-600">URL</span>
              <span class="text-white">Shortener</span>
            </a>
            <a class="duration-200 font-medium hover:text-sky-400 ml-auto" href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-32 ">
    <form class="flex space-x-4 h-20 justify-center">
      <InputText class="input" type="text" v-model="value" placeholder="Paste your url here" />
      <Button class="button" label="Short" />
    </form>

  </main>
</template>

<style scoped>
.input {
  @apply bg-slate-800 w-1/2 border-slate-700 hover:border-sky-400 !important
}
.button{
  @apply bg-sky-600 w-24 hover:bg-sky-400 border-slate-700 !important
}
</style>
