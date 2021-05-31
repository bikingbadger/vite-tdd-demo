<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" data-username />
    <input type="submit" />
  </form>
  <div v-if="submitted" class="message">
    Thank you for your submission, {{ username }}
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const username = ref('');
    const submitted = ref(false);

    const handleSubmit = () => {
      submitted.value = true;
    };

    return {
      username,
      submitted,
      handleSubmit,
    };
  },
};
</script>

<style></style>
