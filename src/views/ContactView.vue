<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <div>
    <v-parallax src="@/assets/contact-header.jpg" height="500">
      <v-row
        class="fill-height ma-n6 pa-0"
        align="center"
        justify="center"
        style="background-image: linear-gradient(rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33), rgba(78, 36, 87,0.33))"
      >
        <h1 class="display-4 white--text text-center hidden-sm-and-down">CONTACT US</h1>
        <h1 class="display-2 white--text hidden-md-and-up text-center">CONTACT US</h1>
      </v-row>
    </v-parallax>

    <!--        <h1 class="display-2 mt-12 text-center font-weight-bold primary&#45;&#45;text">CONTÁCTENOS</h1>-->
    <v-container>
      <v-row justify="center" class="mt-10">
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
      <p
        class="display-2 mt-12 text-center font-weight-bold primary--text"
      >CONTACT US OR ASK FOR A BUDGET</p>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="5">
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-text-field solo label="Name" prepend-inner-icon="mdi-account" v-model="name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field solo label="Phone" prepend-inner-icon="mdi-phone" v-model="phone"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field solo label="Email" prepend-inner-icon="mdi-email" v-model="email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea solo label="Message" prepend-inner-icon="mdi-message" v-model="message"></v-textarea>
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
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConstantTool from "@/services/tools/ConstantTool";
import { getModule } from "vuex-module-decorators";

@Component
export default class ContactView extends Vue {
  email: string = "";
  name: string = "";
  phone: string = "";
  message: string = "";

  contactEmail: string = ConstantTool.EMAIL;
  contactPhone: string = ConstantTool.PHONE;

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