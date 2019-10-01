<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-parallax src="@/assets/services-header.jpg" height="500">
      <v-row
        class="fill-height ma-n6 pa-0"
        align="center"
        justify="center"
        style="background-image: linear-gradient(rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33))"
      >
        <h1 class="display-4 white--text text-center hidden-sm-and-down">SERVICES</h1>
        <h1 class="display-1 white--text hidden-md-and-up text-center">SERVICES</h1>
      </v-row>
    </v-parallax>

    <v-row class="justify-center">
      <v-col cols="10">
        <p
          class="text-center title mt-12"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, non. Quo dolores earum eius ad doloremque, laboriosam, illum corporis vitae quisquam labore quos</p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-7">
      <v-col cols="10" lg="4" class="pr-sm-6">
        <v-card tile flat color="transparent" to="/modern-houses">
          <v-card-title class="primary">
            <span class="white--text font-weight-bold title mx-auto text-center pb-1">MODERN HOUSES</span>
          </v-card-title>
          <v-card-text class="pa-0 mt-5">
            <v-img src="../assets/modern-houses/modern-house-1.jpg" aspect-ratio="1" height="300"></v-img>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="10" lg="4" class="pr-sm-6">
        <v-card tile flat color="transparent" to="/cottages">
          <v-card-title class="primary">
            <span class="white--text font-weight-bold title mx-auto text-center pb-1">COTTAGES</span>
          </v-card-title>
          <v-card-text class="pa-0 mt-5">
            <v-img src="../assets/cottages/cottage-1.jpg" aspect-ratio="1" height="300"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-2 mb-12">
      <v-col cols="10" lg="4" class="pr-sm-6">
        <v-card tile flat color="transparent" to="/coloured-houses">
          <v-card-title class="primary">
            <span
              class="white--text font-weight-bold title mx-auto text-center pb-1"
            >COLOURED HOUSES</span>
          </v-card-title>
          <v-card-text class="pa-0 mt-5">
            <v-img src="../assets/funny-houses/funny-house-1.jpg" aspect-ratio="1" height="300"></v-img>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="10" lg="4" class="pr-sm-6">
        <v-card tile flat color="transparent" to="/mansions">
          <v-card-title class="primary">
            <span class="white--text font-weight-bold title mx-auto text-center pb-1">MANSIONS</span>
          </v-card-title>
          <v-card-text class="pa-0 mt-5">
            <v-img src="../assets/mansions/mansion-1.jpg" aspect-ratio="1" height="300"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  randomNumber() {
    return Math.floor(Math.random() * 500) + 1;
  }
}
</script>