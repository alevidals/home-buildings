import ConstantTool from "@/services/tools/ConstantTool";

export default class ProfileTool {

    static isDev(): boolean {
        return ConstantTool.PROFILE === "dev"
    }

    static isProd(): boolean {
        return ConstantTool.PROFILE === "prod"
    }

}