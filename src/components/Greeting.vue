<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script lang="ts">
export default {
  name: "Greeting",

  data() {
    return {
      greeting: "Vue and TDD"
    }
  }
}
</script>

