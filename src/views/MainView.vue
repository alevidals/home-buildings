<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-parallax src="../assets/home-header.jpg" height="500">
      <v-row
        class="fill-height ma-n6 pa-0"
        align="center"
        justify="center"
        style="background-image: linear-gradient(rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33))"
      >
        <h1
          class="display-4 white--text text-center hidden-sm-and-down"
        >{{companyName.toUpperCase()}}</h1>
        <h1 class="display-1 white--text hidden-md-and-up text-center">
          PISCINAS
          <br />Y REFORMAS
        </h1>
      </v-row>
    </v-parallax>

    <v-row justify="center" class="mx-0 px-0">
      <v-col cols="10">
        <v-row justify="center" class="mt-n4">
          <v-col cols="12" md="6" lg="3">
            <v-card color="transparent" tile flat to="/modern-houses">
              <v-card-title class="mb-4">Modern Houses</v-card-title>
              <v-img src="../assets/modern-houses/modern-house-1.jpg" height="250"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-card color="transparent" tile flat to="/cottages">
              <v-card-title class="mb-4">Cottages</v-card-title>
              <v-img src="../assets/cottages/cottage-1.jpg" height="250"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-card color="transparent" tile flat to="/coloured-houses">
              <v-card-title class="mb-4">Coloured Houses</v-card-title>
              <v-img src="../assets/funny-houses/funny-house-1.jpg" height="250"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-card color="transparent" tile flat to="/mansions">
              <v-card-title class="mb-4">Mansions</v-card-title>
              <v-img src="../assets/mansions/mansion-1.jpg" height="250"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" class="text-center mx-0 px-0">
      <v-col cols="10">
        <h1 class="display-2 hidden-sm-and-down">OUR WORKS</h1>
        <h1 class="headline hidden-md-and-up">OUR WORKS</h1>
      </v-col>
      <v-col cols="10" md="7">
        <v-carousel
          height="300"
          class="hidden-md-and-up"
          cycle
          interval="4000"
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(work, i) in works" :key="i" :src="work.link"></v-carousel-item>
        </v-carousel>

        <v-carousel
          height="400"
          class="hidden-sm-and-down"
          cycle
          interval="4000"
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(work, i) in works" :key="i" :src="work.link"></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row justify="center" class="mx-0 px-0">
      <v-col cols="12" sm="4" class="text-center">
        <v-avatar color="primary">
          <v-icon color="white">mdi-email</v-icon>
        </v-avatar>
        <div class="font-weight-bold">
          <p class="mt-5">EMAIL</p>
          <p>{{contactEmail}}</p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="text-center">
        <v-avatar color="primary">
          <v-icon color="white">mdi-phone</v-icon>
        </v-avatar>
        <div class="font-weight-bold">
          <p class="mt-5">PHONE</p>
          <p>{{contactPhone}}</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConstantTool from "@/services/tools/ConstantTool";

@Component
export default class MainView extends Vue {
  works = [
    {
      link:
        "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg"
    },
    {
      link:
        "https://cdn.pixabay.com/photo/2014/11/21/17/17/country-house-540796_960_720.jpg"
    },
    {
      link:
        "https://cdn.pixabay.com/photo/2017/04/25/21/07/architecture-2260836_960_720.jpg"
    },
    {
      link:
        "https://cdn.pixabay.com/photo/2014/08/23/15/35/mansion-425272_960_720.jpg"
    }
  ];
  companyName: string = ConstantTool.APP_NAME;
  contactEmail: string = ConstantTool.EMAIL;
  contactPhone: string = ConstantTool.PHONE;
}
</script>
