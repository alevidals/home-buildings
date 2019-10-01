export default class ConstantTool {

    static readonly APP_NAME: string = "Home Buildings"
    static readonly EMAIL: string = "test@email.com"
    static readonly PHONE: string = "+34 123 456 789"
    static PROVIDER_NAME: string = "AleVidalS"

    static readonly PROFILE: string = process.env.VUE_APP_PROFILE
    static readonly USERNAME: string = process.env.VUE_APP_ADMIN_USERNAME
    static readonly PASSWORD: string = process.env.VUE_APP_ADMIN_PASSWORD
}