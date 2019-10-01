<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-parallax src="@/assets/our-work-header.jpg" height="500">
      <v-row
        class="fill-height ma-n6 pa-0"
        align="center"
        justify="center"
        style="background-image: linear-gradient(rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33))"
      >
        <h1 class="display-4 white--text text-center hidden-sm-and-down">OUR WORKS</h1>
        <h1 class="display-1 white--text hidden-md-and-up text-center">OUR WORKS</h1>
      </v-row>
    </v-parallax>

    <v-row justify="center" class="mt-12">
      <v-col cols="12" md class="text-center">
        <v-card class="mx-5 mt-5" flat color="transparent">
          <v-row justify="center" class="py-4 pl-4 pr-4" v-for="item in 10">
            <v-col cols="10" sm="8" md="5" lg="3">
              <v-img
                :src="`https://picsum.photos/500/500?image=${randomNumber()}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
            <v-col cols="10" md="5" lg="8">
              <v-card flat tile>
                <v-card-title class="font-weight-bold primary--text title">TITLE {{item}}</v-card-title>
                <v-card-text
                  class="text-justify"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit placeat ad ex amet maiores nulla eligendi quo sed inventore molestias doloremque, ipsum debitis numquam excepturi perferendis autem quae sapiente necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur accusantium quod rerum quibusdam alias accusamus perspiciatis numquam hic tenetur. Sunt id assumenda maiores vel! Vel corrupti fugit minima at!</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OurWorksView extends Vue {
  randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
}
</script>