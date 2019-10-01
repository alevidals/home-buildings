<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-parallax src="@/assets/about-header.jpg" height="500">
      <v-row
        class="fill-height ma-n6 pa-0"
        align="center"
        justify="center"
        style="background-image: linear-gradient(rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33))"
      >
        <h1 class="display-4 white--text hidden-sm-and-down">ABOUT</h1>
        <h1 class="display-2 white--text hidden-md-and-up text-center">
          ¿QUIÉNES
          <br />SOMOS?
        </h1>
      </v-row>
    </v-parallax>

    <h1 class="display-3 mt-12 mb-6 text-center">{{companyName}}</h1>

    <v-row class="mt-12 mx-0" justify="center" align="center">
      <v-col cols="10" sm="5" md="3" lg="2">
        <v-img src="../assets/mansion-header.jpg" aspect-ratio="1"></v-img>
      </v-col>
      <v-col sm="7" md="5" lg="5" cols="10">
        <p
          class="subtitle-1 font-weight-regular mt-5 text-justify"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ab eaque. Illum fugit quidem consectetur maiores obcaecati nam sapiente, asperiores ullam ratione animi omnis perspiciatis at pariatur consequuntur recusandae cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit consequuntur asperiores blanditiis, distinctio in labore illo magni sed, minus ipsam laborum, voluptatibus omnis cum dolores numquam ducimus perspiciatis sit?</p>
      </v-col>
    </v-row>

    <v-col class="mt-5" cols="12">
      <p
        class="text-center title"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident neque amet numquam itaque et, fuga</p>
    </v-col>

    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="11" sm="6" md="6" lg="4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing:</p>
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident neque</li>
          <li>Lorem ipsum, dolor sit</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing neque</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident</li>
        </ul>
      </v-col>
      <v-col cols="10" sm="5" md="3" lg="2">
        <v-img src="../assets/modern-house-header.jpg" aspect-ratio="1"></v-img>
      </v-col>
    </v-row>

    <v-row class="mx-0" justify="center">
      <v-col class="text-justify mt-5 mb-12" cols="11" md="7">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deleniti sint qui perferendis cum neque quo nobis eos ea enim assumenda officia doloremque repellat beatae quod totam, deserunt ab unde?</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConstantTool from "@/services/tools/ConstantTool";

@Component
export default class AboutView extends Vue {
  companyName: string = ConstantTool.APP_NAME;

  randomNumber() {
    return Math.floor(Math.random() * 500) + 1;
  }
}
</script>