
<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-parallax src="@/assets/mansion-header.jpg" height="500">
      <v-row
        class="fill-height ma-n6 pa-0"
        align="center"
        justify="center"
        style="background-image: linear-gradient(rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33))"
      >
        <h1 class="display-4 white--text font-weight-bold hidden-sm-and-down text-center">MANSIONS</h1>
        <p class="display-1 white--text font-weight-bold text-center hidden-md-and-up">MANSIONS</p>
      </v-row>
    </v-parallax>

    <v-container class="mt-10">
      <v-row justify="center">
        <v-col cols="9">
          <p class="text-justify mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni facilis nesciunt nostrum? Repellendus quisquam suscipit voluptas ut, pariatur ad rem blanditiis labore eveniet aliquam! Consectetur sed voluptatem accusantium ullam delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laudantium consequatur repellat ipsa obcaecati pariatur voluptas veritatis sunt sequi mollitia? Hic quam placeat ipsam modi quisquam, magni nobis similique facilis
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni facilis nesciunt nostrum? Repellendus quisquam suscipit voluptas ut, pariatur ad rem blanditiis labore eveniet aliquam! Consectetur sed voluptatem accusantium ullam delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laudantium consequatur repellat ipsa obcaecati pariatur voluptas veritatis sunt sequi mollitia? Hic quam placeat ipsam modi quisquam, magni nobis similique facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui hic dolorum nesciunt dolores neque numquam non debitis. Velit nemo aperiam enim asperiores unde facere sapiente, eveniet numquam, et, fugit molestias.
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-12" justify="center">
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/mansions/mansion-2.jpg" aspect-ratio="1"></v-img>
        </v-col>
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/mansions/mansion-3.jpg" aspect-ratio="1"></v-img>
        </v-col>
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/mansions/mansion-4.jpg" aspect-ratio="1"></v-img>
        </v-col>
        <v-col cols="10" md="3" lg="2">
          <v-img src="../assets/mansions/mansion-5.jpg" aspect-ratio="1"></v-img>
        </v-col>
      </v-row>

      <v-row class="mx-5">
        <v-row>
          <v-col cols="12">
            <h1 class="text-center hidden-sm-and-down primary--text">CONTACT US OR ASK FOR A BUDGET</h1>
            <h1 class="text-center hidden-md-and-up primary--text">
              CONTÁCTENOS
              <br />O PIDA PRESUPUESTO
            </h1>
          </v-col>
          <v-row justify="center">
            <v-col cols="12" md="5">
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
export default class MansionsView extends Vue {
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