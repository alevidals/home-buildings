<!-- 
  Copyright © 2019 Alejandro Vidal
  License GNU AGPLv3
-->

<template>
    <v-snackbar
            v-model="enabled"
            class="mt-0"
            top
            vertical
            multi-line
            :timeout="snackbarModule.timeout">
        {{snackbarModule.message}}
    </v-snackbar>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import SnackbarModule from "@/store/SnackbarModule";
    import {getModule} from "vuex-module-decorators";

    @Component
    export default class SnackbarComponent extends Vue {

        snackbarModule: SnackbarModule = getModule(SnackbarModule);

        get enabled() {
            return this.snackbarModule.enabled
        }

        set enabled(v: boolean) {
            this.snackbarModule.setEnabled(v)
        }

        @Watch('enabled')
        onChildChanged(val: string, oldVal: string) {
            if (!val) {
                this.snackbarModule.checkQueueMessages()
            }
        }

    }
</script>