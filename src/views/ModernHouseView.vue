<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-parallax src="@/assets/modern-house-header.jpg" height="500">
      <v-row
        class="fill-height ma-n6 pa-0"
        align="center"
        justify="center"
        style="background-image: linear-gradient(rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33))"
      >
        <h1 class="display-4 white--text font-weight-bold hidden-sm-and-down">MODERN HOUSES</h1>
        <h1 class="display-2 white--text font-weight-bold hidden-md-and-up">MODERN HOUSES</h1>
      </v-row>
    </v-parallax>

    <v-container class="mt-10">
      <v-row justify="center">
        <v-col cols="9">
          <p
            class="text-justify mt-10"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus molestias nihil rerum facere, incidunt commodi minima perspiciatis exercitationem saepe vel et blanditiis quae possimus aspernatur pariatur deserunt quod ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab alias dicta nam repellat! Impedit necessitatibus amet recusandae iure vitae ratione, tempora corrupti ex sequi. Perspiciatis mollitia cumque dolorem hic laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia odio fugit nemo beatae eligendi. Dolorem, reprehenderit explicabo eligendi aut non perferendis aperiam deserunt consequatur assumenda earum qui illo ut placeat.</p>
        </v-col>
      </v-row>
      <v-row class="mt-5" justify="center">
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/modern-houses/modern-house-2.jpg" aspect-ratio="1" />
        </v-col>
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/modern-houses/modern-house-3.jpg" aspect-ratio="1" />
        </v-col>
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/modern-houses/modern-house-4.jpg" aspect-ratio="1" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/modern-houses/modern-house-5.jpg" aspect-ratio="1" />
        </v-col>
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/modern-houses/modern-house-6.jpg" aspect-ratio="1" />
        </v-col>
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/modern-houses/modern-house-7.jpg" aspect-ratio="1" />
        </v-col>
      </v-row>

      <v-row class="mx-5">
        <v-row>
          <v-col cols="12">
            <h1 class="text-center hidden-sm-and-down primary--text">CONTACT US OR ASK FOR A BUDGET</h1>
            <h1 class="text-center hidden-md-and-up primary--text">CONTACT US OR ASK FOR A BUDGET</h1>
          </v-col>
          <v-row justify="center">
            <v-col cols="10" md="5">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field solo label="Name" prepend-inner-icon="mdi-account" v-model="name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field solo label="Phone" prepend-inner-icon="mdi-phone" v-model="phone"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field solo label="Email" prepend-inner-icon="mdi-email" v-model="email"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    solo
                    label="Message"
                    prepend-inner-icon="mdi-message"
                    v-model="message"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="primary white--text"
                    prepend-inner-icon="mdi-account"
                    width="100%"
                    @click="sendEmail()"
                  >
                    SEND &nbsp;
                    <v-icon>mdi-send</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ModernHouseView extends Vue {
  email: string = "";
  name: string = "";
  phone: string = "";
  message: string = "";

  randomNumber() {
    return Math.floor(Math.random() * 500) + 1;
  }

  sendEmail() {
    let subject: string = "Estoy interesado en contactar contigo";
    let body: string =
      "Hola piscinas, " +
      "soy " +
      this.name +
      ", mi número de teléfono es " +
      this.phone +
      "y mi correo es " +
      this.email +
      this.message;
    window.location.href =
      "mailto:" +
      "test@email.comweb@gmail.com" +
      "?subject=" +
      subject +
      "&body=" +
      body;
  }
}
</script>