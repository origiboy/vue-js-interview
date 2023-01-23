<template>
  <v-card
      flat
      tile
      width="100%"
      class="red lighten-1 text-center"
  >
    <v-divider></v-divider>

    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({}),
}
</script>