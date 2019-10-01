<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <v-navigation-drawer app right clipped disable-resize-watcher color="primary" v-model="drawer">
    <v-list>
      <v-list-item v-for="item in drawerList" :to="item.to">
        <v-list-item-action>
          <v-icon color="white">{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title text class="white--text">{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider color="white" class="mt-3"></v-divider>
      <v-list-item>
        <v-list-item-title class="white--text">
          <p class="text-center mt-4 body-2">{{companyName.toUpperCase()}} &copy;</p>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SessionModule from "@/store/SessionModule";
import { getModule } from "vuex-module-decorators";
import ConstantTool from "@/services/tools/ConstantTool";

@Component
export default class NavigationDrawerComponent extends Vue {
  drawerList = [
    { title: "INICIO", to: "/", icon: "mdi-home" },
    { title: "¿QUIÉNES SOMOS?", to: "/quienes-somos", icon: "mdi-information" },
    { title: "SERVICIOS", to: "/servicios", icon: "mdi-toolbox" },
    {
      title: "NOTICIAS/EVENTOS",
      to: "/nuestros-trabajos",
      icon: "mdi-calendar-check"
    },
    { title: "CONTACTO", to: "/contacto", icon: "mdi-contact-mail-outline" }
  ];

  sessionModule: SessionModule = getModule(SessionModule);
  companyName: string = ConstantTool.APP_NAME;

  get drawer(): boolean {
    return this.sessionModule.drawer;
  }

  set drawer(v: boolean) {
    this.sessionModule.setDrawer(v);
  }
}
</script>