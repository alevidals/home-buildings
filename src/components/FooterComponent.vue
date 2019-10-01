<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-footer color="primary lighten-2">
      <v-row justify="center" class="text-center">
        <v-col cols="12" md="4">
          <p class="primary--text text--darken-1 font-weight-bold title">About {{companyName}}</p>
          <p
            class="body-2 white--text pa-5"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit delectus placeat harum aut a libero nam, pariatur soluta necessitatibus optio cupiditate voluptatum culpa? Veniam dicta adipisci optio soluta nisi!</p>
          <p class="body-2 white--text">
            <v-icon color="white">mdi-phone</v-icon>
            {{phone}}
          </p>
          <p class="body-2 white--text">
            <v-icon color="white">mdi-email</v-icon>
            {{email}}
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <p class="primary--text text--darken-1 font-weight-bold title">Services</p>
          <v-list color="transparent">
            <v-list-item v-for="item in subMenuServices" :to="item.to">
              <v-list-item-title class="white--text body-2">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-footer>

    <v-footer color="primary white--text" padless>
      <v-row class="mx-auto">
        <v-col cols="12" sm="6" class="d-inline-flex">
          <span
            class="caption my-auto"
          >{{companyName}} - Copyright &copy; {{new Date().getFullYear()}} - {{providerName}}</span>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn text class="white--text caption" to="/">HOME</v-btn>
          <v-btn text class="white--text caption" to="/about">ABOUT</v-btn>
          <v-btn text class="white--text caption" to="/contact">CONTACT</v-btn>
          <v-btn text class="white--text caption" @click="privacyDialog = true">PRIVACY POLICY</v-btn>
          <v-btn text class="white--text caption" @click="legalAdviseDialog = true">LEGAL NOTICE</v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConstantTool from "@/services/tools/ConstantTool";
import SessionModule from "@/store/SessionModule";
import { getModule } from "vuex-module-decorators";

@Component
export default class FooterComponent extends Vue {
  subMenuServices = [
    { title: "MODERN HOUSES", to: "/modern-houses" },
    { title: "COTTAGES", to: "/cottages" },
    { title: "COLOURED HOUSES", to: "/coloured-houses" },
    { title: "MANSIONS", to: "/mansions" }
  ];

  companyName: string = ConstantTool.APP_NAME;
  providerName: string = ConstantTool.PROVIDER_NAME;
  email: string = ConstantTool.EMAIL;
  phone: string = ConstantTool.PHONE;

  sessionModule: SessionModule = getModule(SessionModule);

  get privacyDialog(): boolean {
    return this.sessionModule.privacyDialog;
  }

  set privacyDialog(v: boolean) {
    this.sessionModule.setPrivacyDialog(v);
  }

  get legalAdviseDialog(): boolean {
    return this.sessionModule.legalAdviseDialog;
  }

  set legalAdviseDialog(v: boolean) {
    this.sessionModule.setLegalAdviseDialog(v);
  }
}
</script>