import store from "@/store";
import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";

export class Dialog {

    title?: string = undefined
    body?: string = undefined
    width?: number = undefined
    callback = function () {
    }

    constructor(title: string, body: string, width: number, callback: any) {
        this.title = title
        this.body = body
        this.width = width
        this.callback = callback
    }

}

@Module({dynamic: true, store, name: "DialogModule"})
export default class DialogModule extends VuexModule {

    enabled: boolean = false
    title: string = "No message"
    body: string = "No body"
    width: number = 1000
    callback: any

    @Mutation
    setDialogEnabled(enabled: boolean) {
        this.enabled = enabled
    }

    @Mutation
    setDialogTitle(title: string) {
        this.title = title
    }

    @Mutation
    setDialogBody(body: string) {
        this.body = body
    }

    @Mutation
    setDialogWidth(width: number) {
        this.width = width
    }

    @Action
    showDialog(dialog: Dialog) {
        this.setDialogEnabled(true)
        this.setDialogTitle(dialog.title!)
        this.setDialogBody(dialog.body!)
        this.setDialogWidth(dialog.width!)
        this.callback = dialog.callback
    }

}