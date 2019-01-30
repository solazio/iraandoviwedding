<template>
  <v-flex xs12 lg10 offset-lg1 pb-3 row fill-height>
    <iframe id="videoElement" class="video"
      src='https://www.youtube.com/embed/F0rWVWnlEFw'></iframe>
  </v-flex>
</template>

<script>
export default {
  name: 'AppHome',
}
</script>

<style scoped>
.video {
    min-width: 100%;
    min-height: 100%;
    border: none;
}
</style>
 