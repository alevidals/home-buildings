<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
    <v-container fill-height fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Login" prepend-icon="mdi-account" type="text"
                                          v-model="username"></v-text-field>
                            <v-text-field label="Password" prepend-icon="mdi-lock" type="password"
                                          v-model="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="primary" @click="login()">LOGIN</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import {getModule} from "vuex-module-decorators";
    import SessionModule from "@/store/SessionModule";
    import ConstantTool from "@/services/tools/ConstantTool";
    import ProfileTool from "@/services/tools/ProfileTool";

    @Component
    export default class LoginView extends Vue {

        username: string = ""
        password: string = ""

        created() {
            if (ProfileTool.isDev()) {
                this.username = ConstantTool.USERNAME
                this.password = ConstantTool.PASSWORD
            }
        }

        login() {
            if (this.username == ConstantTool.USERNAME && this.password == ConstantTool.PASSWORD) {
                getModule(SessionModule).enableAdminAndTimestamp()
                console.log("login")
                this.$router.push({path: "/panel"})
            }
        }

    }

</script>
