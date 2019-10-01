<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-btn bottom fixed right color="primary darken-2 white--text" @click="backToTop()">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ButtonComponent extends Vue {
  backToTop() {
    window.scrollTo(0, 0);
  }
}
</script>