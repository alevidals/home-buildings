<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
  <v-dialog v-model="privacyDialog" width="500" persistent>
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>PRIVACY POLICY</v-card-title>
      <v-card-text class="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. A accusantium aliquam asperiores at autem, consectetur, deserunt doloremque eius
        eos et eum eveniet id illo, labore quas quos sunt temporibus vel? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Ad commodi debitis dicta error et eum fuga illum ipsum iure natus
        necessitatibus nulla numquam officiis pariatur perferendis, quidem quis, ratione rerum? Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Ad dolor excepturi, fugit libero officia reiciendis.
        Accusantium architecto doloribus tempora ullam voluptas? Alias esse expedita magni praesentium
        recusandae? Cumque, iste, quod.
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="privacyDialog = false">CERRAR</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SessionModule from "@/store/SessionModule";
import { getModule } from "vuex-module-decorators";

@Component
export default class PrivacyDialogComponent extends Vue {
  sessionModule: SessionModule = getModule(SessionModule);

  get privacyDialog(): boolean {
    return this.sessionModule.privacyDialog;
  }

  set privacyDialog(v: boolean) {
    this.sessionModule.setPrivacyDialog(v);
  }
}
</script>