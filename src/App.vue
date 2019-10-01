<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
    <v-app>
        <NavigationDrawerComponent v-if="showMenu()"/>
        <AppBarComponent v-if="showMenu()"/>
        <v-content>
            <router-view/>
            <DialogComponent/>
        </v-content>
        <PrivacyDialogComponent/>
        <LegalAdviseComponent/>
        <FooterComponent v-if="showMenu()"/>
        <ButtonComponent v-if="showMenu()"/>
    </v-app>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import ConstantTool from "@/services/tools/ConstantTool";
    import DialogComponent from "@/components/DialogComponent.vue";
    import NavigationDrawerComponent from "@/components/NavigationDrawerComponent.vue";
    import AppBarComponent from "@/components/AppBarComponent.vue";
    import PrivacyDialogComponent from "@/components/PrivacyDialogComponent.vue";
    import LegalAdviseComponent from "@/components/LegalAdviseComponent.vue";
    import FooterComponent from "@/components/FooterComponent.vue";
    import ButtonComponent from "@/components/ButtonComponent.vue";

    @Component({
        components: {
            DialogComponent,
            NavigationDrawerComponent,
            AppBarComponent,
            PrivacyDialogComponent,
            LegalAdviseComponent,
            FooterComponent,
            ButtonComponent
        }
    })
    export default class App extends Vue {

        showMenu() {
            return this.$route.name != null && this.$route.name != "login"
        }

    }

</script>
