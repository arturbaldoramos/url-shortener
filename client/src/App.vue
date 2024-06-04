<script setup>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const value = ref(null);
</script>

<template>
  <header>
    <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div class="max-w-7xl mx-auto">
        <div class="border-b border-slate-900/10 py-4 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div class="relative flex items-center">
            <a class="space-x-2 text-3xl font-bold">
              <span class="text-sky-600">URL</span>
              <span class="text-white">Shortener</span>
            </a>
            <a class="font-medium hover:text-sky-400 ml-auto" href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <Card class="w-2/4 text-center bg-slate-300">
      <template #title>Paste your url here</template>
      <template #content>
        <form class="flex flex-row space-x-4">
          <InputText class="w-full" type="text" v-model="value" />
          <Button class="" label="Short" />
        </form>
      </template>
    </Card>
  </main>
</template>

<style scoped></style>
