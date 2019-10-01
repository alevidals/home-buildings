import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store";

@Module({dynamic: true, store, name: "SessionModule"})
export default class SessionModule extends VuexModule {
    isAdmin: boolean = false
    timestamp?: Date = undefined
    drawer: boolean = false
    privacyDialog: boolean = false
    legalAdviseDialog: boolean = false

    @Mutation
    enableAdminAndTimestamp() {
        this.isAdmin = true
        localStorage.isAdmin = true
        // localStorage.setItem("isAdmin", "true")
        localStorage.timestamp = JSON.stringify(new Date().getTime())
    }

    @Mutation
    enableAdmin() {
        this.isAdmin = true
        localStorage.isAdmin = true
    }

    @Mutation
    enableDrawer() {
        this.drawer = true
    }

    @Mutation
    setDrawer(v: boolean) {
        this.drawer = v
    }

    @Mutation
    enablePrivacyDialog() {
        this.privacyDialog = true
    }

    @Mutation
    setPrivacyDialog(v: boolean) {
        this.privacyDialog = v
    }

    @Mutation
    enableLegalAdviseDialog() {
        this.legalAdviseDialog = true
    }

    @Mutation
    setLegalAdviseDialog(v: boolean) {
        this.legalAdviseDialog = v
    }

    @Action
    loadAdmin() {
        let timestampObject = localStorage.timestamp
        if (timestampObject) {
            this.timestamp = new Date(JSON.parse(timestampObject))
        }
        let object = localStorage.isAdmin
        if (object && timestampObject && this.timestamp!.getTime() > new Date().setDate(new Date().getDate() - 1)) {
            this.enableAdmin()
        } else {
            localStorage.removeItem("isAdmin")
            localStorage.removeItem("timestamp")
        }
    }
}