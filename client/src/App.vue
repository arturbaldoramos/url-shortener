<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import { ref } from 'vue';
import axios from 'axios';

const url = ref(null);

const submitForm = async() => {
  try {
    //TODO this needs to change on release: dev only
    const response = await axios.post('/dev/api/v1', {
      url: url.value
    });
    console.log(response.data);

  } catch (error) {
    console.error('Error:', error);
  }
};



</script>

<template>
  <header>
    <div
      class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div class="max-w-7xl mx-auto">
        <div class="border-b border-slate-900/10 py-4 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div class="relative flex items-center">
            <a href="/" class="space-x-2 text-3xl font-bold">
              <span class="text-sky-600">URL</span>
              <span class="text-white">Shortener</span>
            </a>
            <a class="duration-200 font-medium hover:text-sky-400 ml-auto" href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-32 space-y-32">
    <form class="flex space-x-4 h-20 justify-center" @submit.prevent="submitForm">
      <InputGroup class="input-group">
        <InputText class="input" type="text" v-model="url" placeholder="Paste your url here" />
        <Button class="button" type="submit" icon="pi pi-link" label="Shorten" />
      </InputGroup>
    </form>

    <div class="flex-row">
      <div class="grid grid-cols-2 md:grid-cols-3 items-center gap-12">
        <div class="text-center space-y-2">
          <i class="pi pi-box text-sky-400" style="font-size: 2.2rem"></i>
          <div>
            <h3 class="text-xl font-normal text-slate-100">Simple</h3>
            <p>Easy and quick, simply input your long link to instantly receive a shortened URL.</p>
          </div>
        </div>

        <div class="text-center space-y-2">
          <i class="pi pi-bolt text-sky-400 rotate-12" style="font-size: 2.2rem"></i>
          <div>
            <h3 class="text-xl font-normal text-slate-100">Blazingly Fast</h3>
            <p>Effortlessly convert long URLs into compact, shareable links in an instant.</p>
          </div>
        </div>

        <div class="text-center space-y-2">
          <i class="pi pi-wallet text-sky-400" style="font-size: 2.2rem"></i>
          <div>
            <h3 class="text-xl font-normal text-slate-100">Costless</h3>
            <p>We don't want your money, just your satisfaction in simplifying long URLs into concise, manageable links!
            </p>
          </div>
        </div>

        <div class="text-center space-y-2">
          <i class="pi pi-chart-line text-sky-400" style="font-size: 2.2rem"></i>
          <div>
            <h3 class="text-xl font-normal text-slate-100">Statistics</h3>
            <p>Check the number of clicks that your shortened URL received.
            </p>
          </div>
        </div>

        <div class="text-center space-y-2">
          <i class="pi pi-shield text-sky-400" style="font-size: 2.2rem"></i>
          <div>
            <h3 class="text-xl font-normal text-slate-100">Secure</h3>
            <p>Our service utilizes HTTPS protocol and data encryption for your safety.
            </p>
          </div>
        </div>

        <div class="text-center space-y-2">
          <i class="pi pi-heart text-sky-400" style="font-size: 2.2rem"></i>
          <div>
            <h3 class="text-xl font-normal text-slate-100">Devices</h3>
            <p>Enjoy a user-friendly experience on smartphones, tablets, and desktop devices.
            </p>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
.input-group {
  @apply w-2/3
}

.input {
  @apply bg-slate-800 border-slate-700 hover:border-sky-400 !important
}

.button {
  @apply bg-sky-600 hover:bg-sky-400 border-slate-700 text-white font-normal !important
}
</style>
