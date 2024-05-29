<script setup>
  import Card from 'primevue/card';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import { ref } from 'vue';

  const value = ref(null);
</script>

<template>
  <header>
    <div class="logo">
      <a class="logo-text">
        <span class="url">Url</span>
        <span class="shortener">Shortener</span>
      </a>
    </div>
  </header>

  <main>
    <Card>
      <template #title>Paste your url here</template>
      <template #content>
        <form class="flex flex-row space-x-4">
          <InputText type="text" v-model="value" />
          <Button label="Short" />
        </form>
      </template>
    </Card>
  </main>
</template>

<style scoped>
.p-inputtext{
  width: 100%;
}
.p-card {
  width: 50rem;
  text-align: center;
}
.logo{
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  text-align: center;
}
.logo-text{
  font-size: 3rem;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.logo-text .url {
  color: var(--p-primary-color);
  font-weight: 600;
}
.logo-text .shortener {
  color: var(--p-text-color);
  font-weight: 600;
}
main {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>
