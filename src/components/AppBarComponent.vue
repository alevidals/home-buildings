<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <v-app-bar app color="primary" clipped-right>
    <v-container class="d-inline-flex">
      <v-img
        src="../assets/logo2.png"
        @click="openPage('/')"
        aspect-ratio="1"
        max-width="50"
        max-height="50"
      />
      <v-spacer></v-spacer>

      <v-btn
        v-for="i in items"
        text
        class="ml-5 white--text my-auto hidden-sm-and-down"
        :to="i.to"
      >{{i.title}}</v-btn>

      <v-app-bar-nav-icon class="hidden-md-and-up" color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SessionModule from "@/store/SessionModule";
import { getModule } from "vuex-module-decorators";

@Component
export default class AppBarComponent extends Vue {
  items = [
    { title: "HOME", to: "/" },
    { title: "ABOUT", to: "/about" },
    { title: "SERVICES", to: "/services" },
    { title: "OUR WORKS", to: "/our-works" },
    { title: "CONTACT US", to: "/contact" }
  ];

  openPage(url: string) {
    window.location.href = url;
  }

  sessionModule: SessionModule = getModule(SessionModule);

  get drawer(): boolean {
    return this.sessionModule.drawer;
  }

  set drawer(v: boolean) {
    this.sessionModule.setDrawer(v);
  }
}
</script>