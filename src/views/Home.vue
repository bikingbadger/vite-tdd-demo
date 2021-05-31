<template>
  <div class="home">
    <Greeting />
  </div>
  <FormSubmitter />
</template>

<script>
// @ is an alias to /src
import Greeting from '../components/Greeting.vue';
import FormSubmitter from '../components/FormSubmitter.vue'

export default {
  name: 'Home',
  components: {
    Greeting,FormSubmitter
  },
};
</script>
